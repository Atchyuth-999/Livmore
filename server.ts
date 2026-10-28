import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const DATA_DIR = path.resolve(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'consultations.json');

// Ensure data directory and file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

interface ConsultationEnquiry {
  id: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  city: string;
  propertyType: string;
  requiredService: string;
  estimatedBudget: string;
  preferredDate: string;
  preferredTime: string;
  additionalRequirements?: string;
  submittedAt: string;
  status: 'PENDING' | 'CONTACTED' | 'CONFIRMED';
  referenceNumber: string;
}

function loadEnquiries(): ConsultationEnquiry[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Failed to read consultations file:', err);
  }
  return [];
}

function saveEnquiries(enquiries: ConsultationEnquiry[]): void {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(enquiries, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to write consultations file:', err);
  }
}

app.use(express.json());

// API Routes (Identical contract to ASP.NET Core Web API ConsultationController)
app.post('/api/consultations', (req: Request, res: Response) => {
  const {
    fullName,
    phoneNumber,
    emailAddress,
    city,
    propertyType,
    requiredService,
    estimatedBudget,
    preferredDate,
    preferredTime,
    additionalRequirements
  } = req.body;

  // 1. Validation
  const errors: Record<string, string> = {};

  if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
    errors.fullName = 'Full Name is required (minimum 2 characters).';
  }

  // Indian phone validation or general 10+ digits
  const cleanedPhone = (phoneNumber || '').replace(/[\s\-\(\)\+]/g, '');
  if (!cleanedPhone || cleanedPhone.length < 10) {
    errors.phoneNumber = 'A valid 10-digit contact number is required.';
  }

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailAddress || !emailRegex.test(emailAddress)) {
    errors.emailAddress = 'A valid email address is required.';
  }

  if (!city || typeof city !== 'string' || city.trim().length === 0) {
    errors.city = 'Please select your target city.';
  }

  if (!propertyType || typeof propertyType !== 'string' || propertyType.trim().length === 0) {
    errors.propertyType = 'Please select your property type.';
  }

  if (!requiredService || typeof requiredService !== 'string' || requiredService.trim().length === 0) {
    errors.requiredService = 'Please select a required interior service.';
  }

  if (!estimatedBudget || typeof estimatedBudget !== 'string' || estimatedBudget.trim().length === 0) {
    errors.estimatedBudget = 'Please choose an estimated budget range.';
  }

  if (!preferredDate) {
    errors.preferredDate = 'Please select your preferred consultation date.';
  }

  if (!preferredTime) {
    errors.preferredTime = 'Please select your preferred time slot.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed. Please verify your inputs.',
      errors
    });
  }

  const enquiries = loadEnquiries();

  // 2. Prevent duplicate submissions (same phone or email submitted within the past 10 minutes)
  const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString();
  const isDuplicate = enquiries.some(
    (e) =>
      (e.emailAddress.toLowerCase() === emailAddress.trim().toLowerCase() ||
        e.phoneNumber.replace(/[\s\-\(\)\+]/g, '') === cleanedPhone) &&
      e.submittedAt > tenMinutesAgo
  );

  if (isDuplicate) {
    return res.status(409).json({
      success: false,
      message: 'A consultation request with this email or phone number was recently submitted. Our senior design team is already reviewing your details.'
    });
  }

  // 3. Create entry
  const now = new Date();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const referenceNumber = `LML-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}-${randomSuffix}`;

  const newEnquiry: ConsultationEnquiry = {
    id: `req_${Date.now()}_${randomSuffix}`,
    fullName: fullName.trim(),
    phoneNumber: phoneNumber.trim(),
    emailAddress: emailAddress.trim().toLowerCase(),
    city: city.trim(),
    propertyType: propertyType.trim(),
    requiredService: requiredService.trim(),
    estimatedBudget: estimatedBudget.trim(),
    preferredDate,
    preferredTime,
    additionalRequirements: additionalRequirements?.trim() || '',
    submittedAt: now.toISOString(),
    status: 'PENDING',
    referenceNumber
  };

  enquiries.unshift(newEnquiry);
  saveEnquiries(enquiries);

  return res.status(201).json({
    success: true,
    message: 'Your consultation request has been confirmed. A Senior Design Principal from LivMore Luxury will contact you shortly.',
    data: newEnquiry
  });
});

app.get('/api/consultations', (_req: Request, res: Response) => {
  const enquiries = loadEnquiries();
  return res.json({
    success: true,
    count: enquiries.length,
    data: enquiries
  });
});

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`LivMore Luxury Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
