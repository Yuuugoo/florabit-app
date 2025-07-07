# 🌿 Florabit (Under Development)

Florabit is a virtual garden app where you can monitor plants through ESP32 and sensors. Built with React, Node.js, PostgreSQL, and Prisma — fully containerized using Docker.

---

## ⚙️ Stack

- **Frontend:** React (Vite + Tailwind + DaisyUI)
- **Backend:** Node.js + Express
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Dev Env:** Docker Compose
- **IoT:** ESP32 (Arduino Framework)
---

## 🚀 Quick Start

### 1. Clone the Repo

- git clone https://github.com/Yuuugoo/florabit.git
- cd florabit-app

### 2. Setup Prisma Client

cd backend
npx prisma generate

### 3. Build Docker Container

- cd florabit-app
- docker-compose up --build
- docker compose exec backend npx prisma migrate dev --name init (Run Prisma Migration inside backend container)

## ✅ Todo / Roadmap

- [ ] Add digital plant growth animation
- [ ] Track watering history
- [ ] User login and plant ownership
- [ ] Daily weather integration
- [ ] Real-world IoT flower pot sync (ESP32)


