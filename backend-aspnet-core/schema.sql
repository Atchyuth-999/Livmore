-- ============================================================================
-- LivMore Luxury Database Schema: Microsoft SQL Server / LocalDB
-- Table: ConsultationEnquiries
-- ============================================================================

IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'LivMoreLuxuryDb')
BEGIN
    CREATE DATABASE LivMoreLuxuryDb;
END
GO

USE LivMoreLuxuryDb;
GO

IF OBJECT_ID('dbo.ConsultationEnquiries', 'U') IS NOT NULL
BEGIN
    DROP TABLE dbo.ConsultationEnquiries;
END
GO

CREATE TABLE dbo.ConsultationEnquiries (
    Id UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID() PRIMARY KEY,
    FullName NVARCHAR(100) NOT NULL,
    PhoneNumber NVARCHAR(20) NOT NULL,
    EmailAddress NVARCHAR(120) NOT NULL,
    City NVARCHAR(50) NOT NULL,
    PropertyType NVARCHAR(60) NOT NULL,
    RequiredService NVARCHAR(80) NOT NULL,
    EstimatedBudget NVARCHAR(60) NOT NULL,
    PreferredDate DATETIME2 NOT NULL,
    PreferredTime NVARCHAR(30) NOT NULL,
    AdditionalRequirements NVARCHAR(2000) NULL,
    SubmittedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    Status NVARCHAR(20) NOT NULL DEFAULT 'PENDING',
    ReferenceNumber NVARCHAR(30) NOT NULL
);
GO

-- Create Non-Clustered Indexes for quick lookup and duplicate prevention
CREATE INDEX IX_ConsultationEnquiries_Email ON dbo.ConsultationEnquiries (EmailAddress);
CREATE INDEX IX_ConsultationEnquiries_Phone ON dbo.ConsultationEnquiries (PhoneNumber);
CREATE INDEX IX_ConsultationEnquiries_SubmittedAt ON dbo.ConsultationEnquiries (SubmittedAt DESC);
CREATE UNIQUE INDEX IX_ConsultationEnquiries_ReferenceNumber ON dbo.ConsultationEnquiries (ReferenceNumber);
GO

-- Sample Seed Record for Testing
INSERT INTO dbo.ConsultationEnquiries (
    FullName, PhoneNumber, EmailAddress, City, PropertyType, 
    RequiredService, EstimatedBudget, PreferredDate, PreferredTime, 
    AdditionalRequirements, ReferenceNumber
) VALUES (
    N'Vikramaditya Singhania',
    N'+91 98201 54321',
    N'vikram@singhaniagroup.in',
    N'Mumbai',
    N'Penthouse',
    N'Turnkey Interior Solutions',
    N'₹2.5Cr+',
    DATEADD(day, 3, SYSUTCDATETIME()),
    N'11:00 AM - 01:00 PM',
    N'Duplex penthouse at Worli sea face. Require bespoke Italian marble and fluted timber detailing throughout.',
    N'LML-202610-1001'
);
GO
