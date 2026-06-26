# ClearQuote - Service Quote Calculator

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

Una aplicación web moderna y responsiva diseñada para proporcionar estimaciones instantáneas de servicios para agencias digitales y freelancers. Migrada y optimizada a estándares actuales.

**Demo:** 
[vamp-quote.netlify.app](url)

---

##  Características y Funciones

- **Calculadora Interactiva de Cotizaciones**: Un flujo guiado de 3 pasos (Servicios, Add-ons y Resultados) para estimar los costos de un proyecto de manera intuitiva.
- **Precios Dinámicos**: Los cálculos y actualizaciones se realizan en tiempo real en la interfaz usando el estado de React.
- **Backend Simulado (API)**: Incluye un servidor Node.js (Express) preparado para recibir y procesar las peticiones del formulario.
- **Diseño Responsivo (Mobile-First)**: Interfaz fluida y completamente optimizada para móviles, tablets y escritorio.
- **UI Premium y Moderna**: Estética mejorada con *glassmorphism*, sombras dinámicas, colores vibrantes y micro-interacciones (hover effects), manteniendo una base limpia.
- **SPA (Single Page Application)**: Navegación instantánea sin recarga de página gracias a `react-router-dom`.

##  Tecnologías Utilizadas

- **Frontend:** React, Vite, React Router DOM, React Icons.
- **Backend:** Node.js, Express, CORS.
- **Estilos:** Vanilla CSS (Modernizado), Bootstrap 5.

##  Instalación y Uso Local

Para correr este proyecto en tu entorno local:

1. **Clona el repositorio**
2. **Instala las dependencias del frontend**
   ```bash
   npm install
   ```
3. **Instala las dependencias del backend**
   ```bash
   cd server
   npm install
   ```
4. **Ejecuta el servidor Backend** (En una terminal)
   ```bash
   cd server
   npm start
   ```
5. **Ejecuta el servidor de desarrollo Frontend** (En otra terminal)
   ```bash
   npm run dev
   ```

##  Construcción para Producción (Deploy)

Para generar la carpeta `dist` lista para subir a Netlify, Vercel, o cualquier otro hosting estático:

```bash
npm run build
```

##  Estructura del Proyecto

- `src/`: Código fuente de la aplicación React.
  - `components/`: Componentes reutilizables (Navbar, Footer, QuoteCalculator).
  - `pages/`: Vistas de la aplicación (Home, About, Services, Contact).
- `server/`: Servidor Express para simular la recepción del formulario.
- `_old_html/`: Copia de seguridad de la versión inicial en HTML estático.

##  Tópicos
`react`, `nodejs`, `vite`, `quote-calculator`, `frontend-development`, `spa`, `bootstrap5`, `modern-ui`

##  Licencia

Este proyecto está bajo la Licencia **MIT**. Eres libre de utilizarlo para proyectos personales y comerciales. (Ver archivo LICENSE para más detalles).
