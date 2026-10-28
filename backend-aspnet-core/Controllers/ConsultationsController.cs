using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LivMoreLuxury.Api.Data;
using LivMoreLuxury.Api.Models;

namespace LivMoreLuxury.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConsultationsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly ILogger<ConsultationsController> _logger;

        public ConsultationsController(AppDbContext context, ILogger<ConsultationsController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/consultations
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var list = await _context.ConsultationEnquiries
                .OrderByDescending(e => e.SubmittedAt)
                .ToListAsync();

            return Ok(new
            {
                success = true,
                count = list.Count,
                data = list
            });
        }

        // GET: api/consultations/{id}
        [HttpGet("{id:guid}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var enquiry = await _context.ConsultationEnquiries.FindAsync(id);
            if (enquiry == null)
            {
                return NotFound(new { success = false, message = "Enquiry not found" });
            }

            return Ok(new { success = true, data = enquiry });
        }

        // POST: api/consultations
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] ConsultationEnquiry request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new
                {
                    success = false,
                    message = "Validation failed. Please verify your inputs.",
                    errors = ModelState.Values
                        .SelectMany(v => v.Errors)
                        .Select(e => e.ErrorMessage)
                });
            }

            // Duplicate submission check: prevent same phone or email submitted within past 10 minutes
            var cutoff = DateTime.UtcNow.AddMinutes(-10);
            var isDuplicate = await _context.ConsultationEnquiries.AnyAsync(e =>
                (e.EmailAddress.ToLower() == request.EmailAddress.ToLower() ||
                 e.PhoneNumber == request.PhoneNumber) &&
                e.SubmittedAt >= cutoff
            );

            if (isDuplicate)
            {
                return Conflict(new
                {
                    success = false,
                    message = "A consultation request with this email or phone number was recently submitted. Our senior design team is already reviewing your details."
                });
            }

            // Generate reference number
            var now = DateTime.UtcNow;
            var rand = new Random();
            request.ReferenceNumber = $"LML-{now:yyyyMM}-{rand.Next(1000, 9999)}";
            request.SubmittedAt = now;
            request.Status = "PENDING";

            _context.ConsultationEnquiries.Add(request);
            await _context.SaveChangesAsync();

            _logger.LogInformation("New consultation booking received: {RefNum} for {FullName} in {City}",
                request.ReferenceNumber, request.FullName, request.City);

            return CreatedAtAction(nameof(GetById), new { id = request.Id }, new
            {
                success = true,
                message = "Your consultation request has been confirmed. A Senior Design Principal from LivMore Luxury will contact you shortly.",
                data = request
            });
        }
    }
}
