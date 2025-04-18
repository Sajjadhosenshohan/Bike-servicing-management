# 🚴‍♂️ Bike Servicing Management API

## 📝 Overview

A backend API for managing bike servicing operations, supporting CRUD for customers, bikes, and service records, with endpoints for service assignment and completion.

## 🌐 Live Backend

*https://bike-servicing-management-chi.vercel.app*

## 🛠️ Tech Stack

- **Node.js** & **Express.js**: Backend runtime and API framework
- **TypeScript**: Type-safe JavaScript
- **Prisma ORM**: Database management
- **PostgreSQL**: Relational database

## ⚙️ Setup Guide

### Prerequisites

- Node.js (v16+)
- PostgreSQL (v12+)
- npm/yarn
- PostgreSQL database

### Steps

1. **Clone Repo**

   ```bash
   git clone <repo-url>
   cd bike-servicing-api
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure** `.env`

   ```env
   DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database>?schema=public"
   PORT=5000
   NODE_ENV=development
   BCRYPT_SALT_ROUNDS=12
   ```

4. **Run Migrations**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start Server**

   ```bash
   npm run dev
   ```

   API runs at `http://localhost:5000`.

### Testing

Use **Postman** or **cURL** to test endpoints (see below).

## 🔑 Key Features

- 🧑‍💼 **Customer Management**: CRUD operations
- 🏍️ **Bike Management**: Add and fetch bikes
- 🔧 **Service Management**: Track and complete services
- ⏰ **Pending/Overdue Services**: List services overdue by 7+ days
- 🚨 **Error Handling**: Standardized responses

## 🛤️ API Endpoints

### Customers

- `POST /api/customers`: Create customer
- `GET /api/customers`: List all customers
- `GET /api/customers/:id`: Get customer by ID
- `PUT /api/customers/:id`: Update customer
- `DELETE /api/customers/:id`: Delete customer

### Bikes

- `POST /api/bikes`: Add bike
- `GET /api/bikes`: List all bikes
- `GET /api/bikes/:id`: Get bike by ID

### Services

- `POST /api/services`: Create service record
- `GET /api/services`: List all services
- `GET /api/services/:id`: Get service by ID
- `PUT /api/services/:id/complete`: Mark service as done
- `GET /api/services/status`: List pending/overdue services

## 🚨 Error Handling

```json
{
  "success": false,
  "status": 404,
  "message": "Resource not found",
  "stack": "Shown in dev mode"
}
```

## 🗄️ Database Schema

### Customer

- `customerId`: UUID (PK)
- `name`, `email` (unique), `phone`: String
- `createdAt`: DateTime

### Bike

- `bikeId`: UUID (PK)
- `brand`, `model`: String
- `year`: Integer
- `customerId`: UUID (FK)

### ServiceRecord

- `serviceId`: UUID (PK)
- `bikeId`: UUID (FK)
- `serviceDate`, `completionDate` (nullable): DateTime
- `description`: String
- `status`: String ("pending", "in-progress", "done")

## 📌 Notes

- Ensure PostgreSQL is running.
- Use `uuid` library for IDs.
- `/api/services/status` is a bonus feature for overdue tasks.

For deployment or queries, refer to the docs or contact the maintainer.