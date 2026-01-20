# Vue Enterprise Dashboard

A modern enterprise-ready dashboard built with Vue 3, TypeScript, Tailwind CSS and Pinia.
This project was designed to demonstrate real-world frontend architecture, authentication flow, protected routes, and scalable UI components.

> Portfolio project focused on frontend engineering best practices.

---

## Features

- Authentication flow (login + route guards)
- Global state management with Pinia
- Corporate dashboard layout (metrics & activity feed)
- Responsive UI with Tailwind CSS
- Reusable and modular Vue components
- Built with Vite for fast development
- Protected routes using Vue Router
- Ready for real API integration (JWT)

---

## Tech Stack

- **Vue 3** (Composition API)
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **Pinia**
- **Vue Router**
- **PostCSS**

---

## 📂 Project Structure

src/
├─ components/
│ └─ Dashboard/
├─ views/
│ ├─ LoginView.vue
│ └─ DashboardView.vue
├─ stores/
│ └─ auth.store.ts
├─ router/
│ └─ index.ts
├─ assets/
└─ main.ts


---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SEU-USUARIO/vue-enterprise-dashboard.git
cd vue-enterprise-dashboard

npm install
npm run dev
http://localhost:5173

🔐 Authentication (Development)

For development purposes, authentication is mocked.
The structure is ready to integrate with a real backend using JWT tokens.

Roadmap

 Role-based access control (Admin / User)

 API integration (Laravel or Node.js)

 Real charts with data visualization

 Production deployment (VPS + HTTPS)

 Unit & E2E tests

Author

Filipe Corrêa
Frontend / Full Stack Developer
20+ years of experience building web applications

📄 License

This project is for portfolio and educational purposes.