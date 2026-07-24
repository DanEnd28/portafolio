# Portafolio — Danny Endara

Portafolio web personal de **Danny Endara**, AI Automation Engineer (n8n · GoHighLevel · Agentes Conversacionales de IA).

Single-page en **React + Vite + Tailwind CSS**, con modo claro/oscuro y estética técnica minimalista.

---

## 🚀 Correr en local

Requisitos: Node 18+ y npm.

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (por defecto `http://localhost:5173`).

Otros comandos:

```bash
npm run build     # genera la versión de producción en /dist
npm run preview   # sirve el build de producción en local para probarlo
```

---

## ✏️ Personalizar

Casi todo el contenido editable vive en **`src/data/content.js`**:

- `PROFILE` — nombre, roles (automatización + frontend), tagline, intro, ruta de la foto, ruta del CV, disponibilidad y ubicación.
- `LINKS` — email, LinkedIn, GitHub, Upwork y WhatsApp.
- `STATS` — las 3 métricas bajo "Sobre mí".
- `INDUSTRIES` — los rubros que se muestran como chips.
- `WHAT_I_DO` — las 4 tarjetas de servicios.
- `EXPERIENCE` — la experiencia laboral (timeline).
- `PROJECTS` — proyectos de automatización / IA (con enlace al repo).
- `FRONTEND_PROJECTS` — proyectos frontend profesionales.
- `EDUCATION`, `CERTS`, `LANGUAGES` — formación e idiomas.

**Tu CV descargable:** el botón "Descargar CV" del hero apunta a `PROFILE.cv`.
Ya está `public/CV-Danny-Endara.docx`; para ofrecer un PDF, expórtalo, colócalo en
`public/CV-Danny-Endara.pdf` y cambia `PROFILE.cv` a esa ruta.

**Tu foto:** coloca tu imagen en `public/foto-danny.jpg` y cambia `PROFILE.photo`
en `content.js` a `'/foto-danny.jpg'`. Se muestra bien cuadrada (~1:1).

**Logos del stack:** son iconos de marca de `react-icons` (se empaquetan en el
build, sin llamadas externas). El mapa de marca → logo/color está en
`src/components/BrandIcons.jsx`; GoHighLevel usa un logo custom porque no existe en
la librería.

**Imágenes de proyectos:** en `src/components/Projects.jsx` hay un placeholder
`[ imagen / gif por completar ]`. Sustitúyelo por una captura o GIF de cada proyecto.

**Texto del "Sobre mí":** está en `src/components/About.jsx`.

---

## 📬 Formulario de contacto (opcional)

El formulario puede enviar los mensajes a un **webhook de n8n**:

1. Copia `.env.example` a `.env`.
2. Rellena `VITE_N8N_WEBHOOK_URL` con la URL de tu webhook.

Si la variable está vacía, el botón abre el cliente de correo del visitante como
respaldo (no se hardcodea ninguna URL real).

> En Vercel, esta variable se configura en **Settings → Environment Variables**.

---

## ☁️ Desplegar en Vercel

Proyecto Vite estándar, sin configuración especial de servidor:

1. Sube el repo a GitHub.
2. En [vercel.com](https://vercel.com): **Add New → Project → Import** tu repo.
3. Framework: **Vite** (detectado automáticamente). Deploy.

Guía paso a paso detallada: **`../DESPLIEGUE_VERCEL.md`**.

---

## 🗂️ Estructura

```
portafolio-danny/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Section.jsx
│   │   ├── About.jsx
│   │   ├── WhatIDo.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── FrontendProjects.jsx
│   │   ├── BrandIcons.jsx
│   │   ├── TechStack.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── content.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env.example
└── .gitignore
```
