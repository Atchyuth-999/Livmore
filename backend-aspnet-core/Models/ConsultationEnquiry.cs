using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LivMoreLuxury.Api.Models
{
    [Table("ConsultationEnquiries")]
    public class ConsultationEnquiry
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required(ErrorMessage = "Full Name is required.")]
        [StringLength(100, MinimumLength = 2)]
        public string FullName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Phone Number is required.")]
        [Phone(ErrorMessage = "Invalid phone number format.")]
        [StringLength(20)]
        public string PhoneNumber { get; set; } = string.Empty;

        [Required(ErrorMessage = "Email Address is required.")]
        [EmailAddress(ErrorMessage = "Invalid email address format.")]
        [StringLength(120)]
        public string EmailAddress { get; set; } = string.Empty;

        [Required(ErrorMessage = "City is required.")]
        [StringLength(50)]
        public string City { get; set; } = string.Empty;

        [Required(ErrorMessage = "Property Type is required.")]
        [StringLength(60)]
        public string PropertyType { get; set; } = string.Empty;

        [Required(ErrorMessage = "Required Service is required.")]
        [StringLength(80)]
        public string RequiredService { get; set; } = string.Empty;

        [Required(ErrorMessage = "Estimated Budget is required.")]
        [StringLength(60)]
        public string EstimatedBudget { get; set; } = string.Empty;

        [Required(ErrorMessage = "Preferred Consultation Date is required.")]
        public DateTime PreferredDate { get; set; }

        [Required(ErrorMessage = "Preferred Time slot is required.")]
        [StringLength(30)]
        public string PreferredTime { get; set; } = string.Empty;

        [StringLength(2000)]
        public string? AdditionalRequirements { get; set; }

        public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;

        [StringLength(20)]
        public string Status { get; set; } = "PENDING";

        [StringLength(30)]
        public string ReferenceNumber { get; set; } = string.Empty;
    }
}
