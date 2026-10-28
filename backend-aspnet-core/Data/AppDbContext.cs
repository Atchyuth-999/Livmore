using Microsoft.EntityFrameworkCore;
using LivMoreLuxury.Api.Models;

namespace LivMoreLuxury.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<ConsultationEnquiry> ConsultationEnquiries => Set<ConsultationEnquiry>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ConsultationEnquiry>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.HasIndex(e => e.EmailAddress);
                entity.HasIndex(e => e.PhoneNumber);
                entity.HasIndex(e => e.SubmittedAt);
                entity.HasIndex(e => e.ReferenceNumber).IsUnique();

                entity.Property(e => e.FullName).IsRequired().HasMaxLength(100);
                entity.Property(e => e.PhoneNumber).IsRequired().HasMaxLength(20);
                entity.Property(e => e.EmailAddress).IsRequired().HasMaxLength(120);
                entity.Property(e => e.City).IsRequired().HasMaxLength(50);
                entity.Property(e => e.PropertyType).IsRequired().HasMaxLength(60);
                entity.Property(e => e.RequiredService).IsRequired().HasMaxLength(80);
                entity.Property(e => e.EstimatedBudget).IsRequired().HasMaxLength(60);
                entity.Property(e => e.Status).HasMaxLength(20).HasDefaultValue("PENDING");
            });
        }
    }
}
