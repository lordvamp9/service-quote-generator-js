# ClearQuote - Service Quote Calculator

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

A modern and responsive web application designed to provide instant service estimations for digital agencies and freelancers. Migrated and optimized to current standards.

**Demo:** [vamp-quote.netlify.app](https://vamp-quote.netlify.app)

---

## Features and Functions

- **Interactive Quote Calculator**: An intuitive 3-step guided flow (Services, Add-ons, and Results) to estimate project costs.
- **Dynamic Pricing**: Calculations and updates are performed in real-time in the interface using React state.
- **Simulated Backend (API)**: Includes a Node.js (Express) server prepared to receive and process form submissions.
- **Responsive Design (Mobile-First)**: Fluid interface fully optimized for mobile, tablet, and desktop.
- **Premium and Modern UI**: Enhanced aesthetics featuring *glassmorphism*, dynamic shadows, vibrant colors, and micro-interactions (hover effects), while maintaining a clean baseline.
- **SPA (Single Page Application)**: Instant navigation without page reload thanks to `react-router-dom`.

## Technologies Used

- **Frontend:** React, Vite, React Router DOM, React Icons.
- **Backend:** Node.js, Express, CORS.
- **Styles:** Vanilla CSS (Modernized), Bootstrap 5.

## Installation and Local Usage

To run this project in your local environment:

1. **Clone the repository**
2. **Install frontend dependencies**
   ```bash
   npm install
   ```
3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```
4. **Run the backend server** (In a terminal)
   ```bash
   cd server
   npm start
   ```
5. **Run the frontend development server** (In another terminal)
   ```bash
   npm run dev
   ```

## Production Build (Deploy)

To generate the `dist` folder ready to upload to Netlify, Vercel, or any other static hosting:

```bash
npm run build
```

## Project Structure

- `src/`: Source code of the React application.
  - `components/`: Reusable components (Navbar, Footer, QuoteCalculator).
  - `pages/`: Application views (Home, About, Services, Contact).
- `server/`: Express server to simulate form submissions.
- `_old_html/`: Backup of the initial static HTML version.

## Topics
`react`, `nodejs`, `vite`, `quote-calculator`, `frontend-development`, `spa`, `bootstrap5`, `modern-ui`

## License

This project is under the **MIT** License. You are free to use it for personal and commercial projects. (See LICENSE file for details).
