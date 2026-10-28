import React, { useState } from 'react';
import {
  CITIES_SERVED,
  PROPERTY_TYPES,
  BUDGET_RANGES,
  SERVICES
} from '../data/interiorData';
import {
  CheckCircle,
  AlertCircle,
  Clock,
  Calendar,
  Building2,
  Mail,
  Phone,
  User,
  Shield,
  Send
} from 'lucide-react';

interface ConsultationFormProps {
  preselectedService?: string;
}

interface FormDataState {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  city: string;
  propertyType: string;
  requiredService: string;
  estimatedBudget: string;
  preferredDate: string;
  preferredTime: string;
  additionalRequirements: string;
}

interface SubmittedData extends FormDataState {
  id: string;
  referenceNumber: string;
  submittedAt: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  preselectedService
}) => {
  const [formData, setFormData] = useState<FormDataState>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    city: 'Mumbai',
    propertyType: '4+ BHK Luxury Apartment',
    requiredService: preselectedService || 'Complete Home Interiors',
    estimatedBudget: '₹1 Crore – ₹2.5 Crores (Premium Luxury Residence)',
    preferredDate: '',
    preferredTime: '11:00 AM – 01:00 PM',
    additionalRequirements: ''
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null);

  // Time slots for consultation
  const timeSlots = [
    '10:00 AM – 12:00 PM',
    '11:00 AM – 01:00 PM',
    '02:00 PM – 04:00 PM',
    '04:00 PM – 06:00 PM',
    '06:00 PM – 08:00 PM'
  ];

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full legal name (minimum 2 characters).';
    }

    // Phone validation (standard Indian 10 digits or international format)
    const cleanedPhone = formData.phoneNumber.replace(/[\s\-\(\)\+]/g, '');
    if (!cleanedPhone || cleanedPhone.length < 10) {
      errors.phoneNumber = 'Please enter a valid 10-digit mobile or contact number.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.emailAddress.trim() || !emailRegex.test(formData.emailAddress.trim())) {
      errors.emailAddress = 'Please enter a valid email address.';
    }

    if (!formData.city) {
      errors.city = 'Please select your target city.';
    }

    if (!formData.propertyType) {
      errors.propertyType = 'Please select your property type.';
    }

    if (!formData.requiredService) {
      errors.requiredService = 'Please select a required interior service.';
    }

    if (!formData.estimatedBudget) {
      errors.estimatedBudget = 'Please choose an estimated budget tier.';
    }

    if (!formData.preferredDate) {
      errors.preferredDate = 'Please select a consultation date.';
    } else {
      const selected = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        errors.preferredDate = 'Consultation date cannot be in the past.';
      }
    }

    if (!formData.preferredTime) {
      errors.preferredTime = 'Please select a preferred time slot.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    setServerError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmittedData(result.data);
      } else if (response.status === 409) {
        setServerError(
          result.message ||
            'A consultation request with this contact was recently received. Our senior studio director is already reviewing it.'
        );
      } else {
        setServerError(
          result.message || 'Unable to submit your consultation request. Please check your information.'
        );
        if (result.errors) {
          setFieldErrors(result.errors);
        }
      }
    } catch (err) {
      console.error('Submission error:', err);
      setServerError(
        'Connection error while reaching the consultation server. Please verify your connection or call our concierge directly at +91 22 4910 8800.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      city: 'Mumbai',
      propertyType: '4+ BHK Luxury Apartment',
      requiredService: 'Complete Home Interiors',
      estimatedBudget: '₹1 Crore – ₹2.5 Crores (Premium Luxury Residence)',
      preferredDate: '',
      preferredTime: '11:00 AM – 01:00 PM',
      additionalRequirements: ''
    });
    setFieldErrors({});
    setServerError(null);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F4F0E9] border-b border-[#E8E1D6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B59A70] font-medium block mb-2">
            Private Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1A18] font-normal tracking-tight">
            Book an Architectural Consultation
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#1C1A18]/70 font-sans leading-relaxed">
            Reserve a confidential briefing session with a Senior Principal Architect at our flagship studio or via virtual video suite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Form or Confirmation (7 cols) */}
          <div className="lg:col-span-7">
            {submittedData ? (
              /* Success Confirmation Card */
              <div className="bg-white border border-[#B59A70] p-8 lg:p-10 shadow-sm">
                <div className="flex items-center gap-3 text-[#B59A70] mb-4">
                  <CheckCircle className="w-8 h-8" />
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#B59A70] font-semibold block">
                      Enquiry Registered
                    </span>
                    <h3 className="text-2xl font-serif text-[#1C1A18]">
                      Consultation Confirmed
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[#1C1A18]/80 font-sans leading-relaxed mb-6">
                  Thank you, <strong>{submittedData.fullName}</strong>. Your consultation docket has been delivered to our Senior Design Principal. We will review your property parameters and reach out within 4 business hours to confirm your schedule.
                </p>

                {/* Booking Receipt Breakdown */}
                <div className="bg-[#F4F0E9] border border-[#E8E1D6] p-6 space-y-3 text-xs mb-8">
                  <div className="flex justify-between border-b border-[#E8E1D6] pb-2">
                    <span className="text-[#1C1A18]/60 uppercase tracking-wider">Docket Reference:</span>
                    <span className="font-mono font-semibold text-[#1C1A18]">{submittedData.referenceNumber}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8E1D6] pb-2">
                    <span className="text-[#1C1A18]/60 uppercase tracking-wider">Target City:</span>
                    <span className="font-medium text-[#1C1A18]">{submittedData.city}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8E1D6] pb-2">
                    <span className="text-[#1C1A18]/60 uppercase tracking-wider">Property Type:</span>
                    <span className="font-medium text-[#1C1A18]">{submittedData.propertyType}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8E1D6] pb-2">
                    <span className="text-[#1C1A18]/60 uppercase tracking-wider">Selected Service:</span>
                    <span className="font-medium text-[#1C1A18]">{submittedData.requiredService}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8E1D6] pb-2">
                    <span className="text-[#1C1A18]/60 uppercase tracking-wider">Budget Allocation:</span>
                    <span className="font-medium text-[#1C1A18]">{submittedData.estimatedBudget}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8E1D6] pb-2">
                    <span className="text-[#1C1A18]/60 uppercase tracking-wider">Scheduled Date:</span>
                    <span className="font-medium text-[#1C1A18]">{submittedData.preferredDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1C1A18]/60 uppercase tracking-wider">Time Window:</span>
                    <span className="font-medium text-[#1C1A18]">{submittedData.preferredTime}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 bg-[#1C1A18] text-[#F4F0E9] text-xs uppercase tracking-widest font-medium hover:bg-[#B59A70] cursor-pointer"
                  >
                    Submit Another Booking
                  </button>
                  <a
                    href="tel:+912249108800"
                    className="w-full sm:w-auto px-6 py-3 bg-transparent text-[#1C1A18] border border-[#1C1A18]/30 text-xs uppercase tracking-widest font-medium text-center hover:bg-[#E8E1D6]"
                  >
                    Call Concierge Hotline
                  </a>
                </div>
              </div>
            ) : (
              /* The Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white border border-[#E8E1D6] p-8 lg:p-10 space-y-6"
              >
                {/* Server Error Message */}
                {serverError && (
                  <div
                    role="alert"
                    className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-3"
                  >
                    <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold block mb-0.5">Submission Notice</span>
                      <span>{serverError}</span>
                    </div>
                  </div>
                )}

                {/* 1. Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs uppercase tracking-wider font-medium text-[#1C1A18] mb-1.5"
                  >
                    Full Name <span className="text-red-700">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Vikramaditya Singhania"
                      className={`w-full px-4 py-3 bg-[#F4F0E9]/50 border text-sm text-[#1C1A18] ${
                        fieldErrors.fullName ? 'border-red-500' : 'border-[#E8E1D6]'
                      }`}
                    />
                    <User className="absolute right-3.5 top-3.5 w-4 h-4 text-[#1C1A18]/40 pointer-events-none" />
                  </div>
                  {fieldErrors.fullName && (
                    <p className="mt-1 text-[11px] text-red-600 font-sans">{fieldErrors.fullName}</p>
                  )}
                </div>

                {/* 2-Column: Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-xs uppercase tracking-wider font-medium text-[#1C1A18] mb-1.5"
                    >
                      Phone Number <span className="text-red-700">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+91 98200 12345"
                        className={`w-full px-4 py-3 bg-[#F4F0E9]/50 border text-sm text-[#1C1A18] ${
                          fieldErrors.phoneNumber ? 'border-red-500' : 'border-[#E8E1D6]'
                        }`}
                      />
                      <Phone className="absolute right-3.5 top-3.5 w-4 h-4 text-[#1C1A18]/40 pointer-events-none" />
                    </div>
                    {fieldErrors.phoneNumber && (
                      <p className="mt-1 text-[11px] text-red-600 font-sans">{fieldErrors.phoneNumber}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="emailAddress"
                      className="block text-xs uppercase tracking-wider font-medium text-[#1C1A18] mb-1.5"
                    >
                      Email Address <span className="text-red-700">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        placeholder="v.singhania@estate.in"
                        className={`w-full px-4 py-3 bg-[#F4F0E9]/50 border text-sm text-[#1C1A18] ${
                          fieldErrors.emailAddress ? 'border-red-500' : 'border-[#E8E1D6]'
                        }`}
                      />
                      <Mail className="absolute right-3.5 top-3.5 w-4 h-4 text-[#1C1A18]/40 pointer-events-none" />
                    </div>
                    {fieldErrors.emailAddress && (
                      <p className="mt-1 text-[11px] text-red-600 font-sans">{fieldErrors.emailAddress}</p>
                    )}
                  </div>
                </div>

                {/* 2-Column: City & Property Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* City */}
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-xs uppercase tracking-wider font-medium text-[#1C1A18] mb-1.5"
                    >
                      City <span className="text-red-700">*</span>
                    </label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F4F0E9]/50 border border-[#E8E1D6] text-sm text-[#1C1A18]"
                    >
                      {CITIES_SERVED.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Property Type */}
                  <div>
                    <label
                      htmlFor="propertyType"
                      className="block text-xs uppercase tracking-wider font-medium text-[#1C1A18] mb-1.5"
                    >
                      Property Type <span className="text-red-700">*</span>
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F4F0E9]/50 border border-[#E8E1D6] text-sm text-[#1C1A18]"
                    >
                      {PROPERTY_TYPES.map((pt) => (
                        <option key={pt} value={pt}>
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 2-Column: Required Service & Estimated Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Required Service */}
                  <div>
                    <label
                      htmlFor="requiredService"
                      className="block text-xs uppercase tracking-wider font-medium text-[#1C1A18] mb-1.5"
                    >
                      Required Service <span className="text-red-700">*</span>
                    </label>
                    <select
                      id="requiredService"
                      name="requiredService"
                      value={formData.requiredService}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F4F0E9]/50 border border-[#E8E1D6] text-sm text-[#1C1A18]"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Estimated Budget */}
                  <div>
                    <label
                      htmlFor="estimatedBudget"
                      className="block text-xs uppercase tracking-wider font-medium text-[#1C1A18] mb-1.5"
                    >
                      Estimated Budget <span className="text-red-700">*</span>
                    </label>
                    <select
                      id="estimatedBudget"
                      name="estimatedBudget"
                      value={formData.estimatedBudget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F4F0E9]/50 border border-[#E8E1D6] text-sm text-[#1C1A18]"
                    >
                      {BUDGET_RANGES.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 2-Column: Preferred Date & Preferred Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Date */}
                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block text-xs uppercase tracking-wider font-medium text-[#1C1A18] mb-1.5"
                    >
                      Preferred Consultation Date <span className="text-red-700">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-[#F4F0E9]/50 border text-sm text-[#1C1A18] ${
                          fieldErrors.preferredDate ? 'border-red-500' : 'border-[#E8E1D6]'
                        }`}
                      />
                      <Calendar className="absolute right-3.5 top-3.5 w-4 h-4 text-[#1C1A18]/40 pointer-events-none" />
                    </div>
                    {fieldErrors.preferredDate && (
                      <p className="mt-1 text-[11px] text-red-600 font-sans">{fieldErrors.preferredDate}</p>
                    )}
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label
                      htmlFor="preferredTime"
                      className="block text-xs uppercase tracking-wider font-medium text-[#1C1A18] mb-1.5"
                    >
                      Preferred Time Slot <span className="text-red-700">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F4F0E9]/50 border border-[#E8E1D6] text-sm text-[#1C1A18]"
                      >
                        {timeSlots.map((ts) => (
                          <option key={ts} value={ts}>
                            {ts}
                          </option>
                        ))}
                      </select>
                      <Clock className="absolute right-3.5 top-3.5 w-4 h-4 text-[#1C1A18]/40 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Additional Requirements */}
                <div>
                  <label
                    htmlFor="additionalRequirements"
                    className="block text-xs uppercase tracking-wider font-medium text-[#1C1A18] mb-1.5"
                  >
                    Additional Requirements or Blueprint Notes (Optional)
                  </label>
                  <textarea
                    id="additionalRequirements"
                    name="additionalRequirements"
                    rows={4}
                    value={formData.additionalRequirements}
                    onChange={handleChange}
                    placeholder="Provide details about your unit layout, possession timeline, preferred European stone or wood finishes, or Vastu requirements..."
                    className="w-full px-4 py-3 bg-[#F4F0E9]/50 border border-[#E8E1D6] text-sm text-[#1C1A18] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#1C1A18] hover:bg-[#B59A70] disabled:bg-[#1C1A18]/50 text-[#F4F0E9] text-xs uppercase tracking-widest font-medium border border-[#1C1A18] cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Registering Consultation Docket...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-[#1C1A18]/50 text-center mt-2 font-sans">
                    Guaranteed confidential handling under Non-Disclosure Protocol. No spam.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Studio Locations & Concierge Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Concierge Box */}
            <div className="bg-white border border-[#E8E1D6] p-8 space-y-6">
              <div className="flex items-center gap-2.5 text-[#B59A70]">
                <Shield className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-semibold">
                  Client Concierge Service
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#1C1A18]">
                Direct Architectural Inquiry
              </h3>

              <p className="text-xs sm:text-sm text-[#1C1A18]/70 font-sans leading-relaxed">
                Prefer an immediate discussion? Our Client Advisory Team is available Monday through Saturday from 10:00 AM to 7:00 PM IST.
              </p>

              <div className="space-y-4 pt-2 text-xs text-[#1C1A18]">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#B59A70] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[#1C1A18]/60 block">Direct Consultation Desk:</span>
                    <a href="tel:+919133933179" className="font-medium hover:text-[#B59A70]">
                      +91 9133933179 / +91 98201 54321
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#B59A70] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[#1C1A18]/60 block">Architectural Inquiries:</span>
                    <a href="mailto:concierge@livmoreluxury.com" className="font-medium hover:text-[#B59A70]">
                      Services@livmoreluxury.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-[#B59A70] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[#1C1A18]/60 block">LivMore Studio:</span>
                    <span className="font-medium">
                      Jubilee Hills , Road No. 36, Hyderabad 500033.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Studio Hubs */}
            <div className="bg-[#E8E1D6]/40 border border-[#E8E1D6] p-6 space-y-4">
              <h4 className="font-serif text-lg text-[#1C1A18] font-medium">
                Metropolitan Studio Network
              </h4>
              <div className="space-y-3 text-xs text-[#1C1A18]/75">
                <div className="border-b border-[#E8E1D6] pb-2">
                  <span className="font-semibold text-[#1C1A18] block">Bengaluru Studio</span>
                  <span>100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru 560038</span>
                </div>
                <div className="border-b border-[#E8E1D6] pb-2">
                  <span className="font-semibold text-[#1C1A18] block">Delhi NCR Studio</span>
                  <span>Horizon Centre, Golf Course Road, DLF Phase 5, Gurugram 122002</span>
                </div>
                <div>
                  <span className="font-semibold text-[#1C1A18] block">Hyderabad Studio</span>
                  <span>Road No. 36, Jubilee Hills, Hyderabad 500033</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
