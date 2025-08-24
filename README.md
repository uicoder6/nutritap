# NutriTap MVP

This is the NutriTap web app MVP (Admin + Vendor + Public pages).

## Stack
- Frontend: React + Vite
- Backend: Node.js + Express + TypeScript + Prisma (PostgreSQL)
- State management: basic useState / react-router-dom
- Auth: demo JWT + OTP (console output)
- Deployment: can be deployed via Docker, Railway, Render, or locally

## Setup Instructions

### Backend
1. Navigate to backend folder:
```bash
cd backend
```
2. Install dependencies:
```bash
npm install
```
3. Setup `.env` file (copy `.env.example`):
```bash
cp .env.example .env
```
4. Initialize Prisma and database:
```bash
npx prisma migrate dev --name init
```
5. Run development server:
```bash
npm run dev
```
6. Backend runs on port 4000 by default.

### Frontend
1. Navigate to frontend folder:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Setup `.env` file (already provided, check `VITE_API_URL` points to backend):
```bash
cp .env .env.local
```
4. Start frontend development server:
```bash
npm run dev
```
5. Frontend runs on port 5173 by default (Vite).

### Features Implemented
- Backend: basic Express API with JWT + OTP demo auth, categories, vendor redeem demo
- Frontend: React pages for AdminOverview, AdminCategories, VendorLogin, VendorRedeem, VendorLedger
- Tailwind CSS or basic CSS for styling
- Folder structure ready for further expansion: CSV import, PDF generation, AI rules, etc.

### Next Steps
- Implement weekly balances and limits in vendor redemption
- Add real SMS OTP provider
- Admin CSV import and batch PDF generation
- Complete authentication flows and role-based access control
- Deploy using Docker or static hosting for frontend
