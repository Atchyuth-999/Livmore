# LivMore Luxury Backend & Database Architecture

This directory contains the ASP.NET Core Web API and Microsoft SQL Server database schemas for **LivMore Luxury**.

## Architecture Overview

- **Framework**: ASP.NET Core 8.0 Web API (`Microsoft.NET.Sdk.Web`)
- **Language**: C# 12
- **ORM**: Entity Framework Core with SQL Server Provider (`Microsoft.EntityFrameworkCore.SqlServer`)
- **Database**: Microsoft SQL Server / LocalDB (`(localdb)\mssqllocaldb`)
- **API Documentation**: Swagger / OpenAPI

---

## Files Structure

```
/backend-aspnet-core
├── Controllers/
│   └── ConsultationsController.cs     # REST endpoints with validation & duplicate protection
├── Data/
│   └── AppDbContext.cs                # EF Core database context & index mappings
├── Models/
│   └── ConsultationEnquiry.cs         # Consultation booking entity model
├── LivMoreLuxury.Api.csproj           # .NET 8 Project configuration
├── Program.cs                         # Application entry point, CORS, DI setup
├── appsettings.json                   # Connection string for SQL Server
├── schema.sql                         # T-SQL DDL script for database creation
└── README.md                          # Documentation
```

---

## Database Setup (Microsoft SQL Server / LocalDB)

1. Open **SQL Server Management Studio (SSMS)** or Azure Data Studio.
2. Connect to your SQL Server or LocalDB instance:
   - Server name: `(localdb)\mssqllocaldb` or `localhost`
   - Authentication: Windows Authentication
3. Open and execute `schema.sql`:
   - Creates the database `LivMoreLuxuryDb`
   - Creates table `dbo.ConsultationEnquiries`
   - Creates non-clustered indexes for `EmailAddress`, `PhoneNumber`, `SubmittedAt`, and unique `ReferenceNumber`
   - Seeds a sample consultation enquiry

---

## How to Run the ASP.NET Core Web API

1. Ensure the .NET 8 SDK is installed:
   ```bash
   dotnet --version
   ```
2. Navigate to this directory and restore packages:
   ```bash
   cd backend-aspnet-core
   dotnet restore
   ```
3. Run the API:
   ```bash
   dotnet run
   ```
4. Access Swagger UI:
   - `https://localhost:7001/swagger` or `http://localhost:5000/swagger`

---

## API Endpoints

- `POST /api/consultations`
  - Submits a consultation enquiry
  - Validates required fields, phone format, and email format
  - Prevents duplicate submissions within 10 minutes
  - Returns `201 Created` with generated reference number (e.g. `LML-202610-4821`)
- `GET /api/consultations`
  - Retrieves all logged consultation bookings ordered by submission date
- `GET /api/consultations/{id}`
  - Retrieves a specific consultation record by GUID
