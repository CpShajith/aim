# AIM Website

## Project Structure
- `client/`: Frontend (React + Vite + Tailwind + R3F)
- `admin/`: Admin Dashboard (React + Vite + Tailwind)
- `api/`: Backend (Node.js + Express + MongoDB)
- `infra/`: Docker configuration

## Getting Started

### Prerequisites
- Node.js 18+
- Docker & Docker Compose (optional, for containerized run)
- MongoDB (local or Atlas)

### Running Locally (Without Docker)

1. **Install Dependencies**
   ```bash
   cd client && npm install
   cd ../admin && npm install
   cd ../api && npm install
   ```

2. **Start Backend**
   ```bash
   cd api
   npm run dev
   ```

3. **Start Client**
   ```bash
   cd client
   npm run dev
   ```

4. **Start Admin**
   ```bash
   cd admin
   npm run dev
   ```

### Running with Docker

```bash
cd infra
docker-compose up --build
```

## Features
- Cinematic 3D Hero Scene
- Admin Dashboard for content management
- REST API with MongoDB
