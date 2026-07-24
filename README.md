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

## ✏️ Personalizar — todo desde `src/data/content.js`

**Regla general:** casi nada se edita en los componentes. Todo el contenido está en
un solo archivo: **`src/data/content.js`**. Abajo, qué hace cada bloque.

### 1. Identidad y contacto

```js
export const PROFILE = {
  name: 'Danny Endara',
  photo: '/foto-danny.jpg',     // archivo en public/
  cv: '/CV-Danny-Endara.docx',  // archivo en public/
  availableLabel: 'Disponible', // texto del indicador verde
  location: 'Valencia, Venezuela · Remoto',
}

export const LINKS = {           // solo las URLs base
  email: '...', linkedin: '...', github: '...', upwork: '...', whatsapp: '...',
}
```

- **Foto:** reemplaza `public/foto-danny.jpg` por la tuya (queda cuadrada ~1:1).
- **CV:** hay un `.docx` en `public/`. Para un PDF, expórtalo, ponlo en
  `public/CV-Danny-Endara.pdf` y cambia `PROFILE.cv` a `'/CV-Danny-Endara.pdf'`.

### 2. Botones y redes sociales (agregar / quitar)

La lista `SOCIALS` controla **los botones del hero, las tarjetas de Contacto y los
iconos del footer** a la vez. Para **agregar una red nueva**, copia una línea del array:

```js
export const SOCIALS = [
  { key: 'email',    label: 'Email',    value: LINKS.email, href: `mailto:${LINKS.email}`, icon: 'email',    color: '#22d3ee' },
  { key: 'instagram',label: 'Instagram',value: '@tu_usuario', href: 'https://instagram.com/tu_usuario', icon: 'instagram', color: '#E4405F' },
]
```

- `icon`: nombre de un icono ya disponible: `email`, `linkedin`, `github`, `upwork`,
  `whatsapp`, `instagram`, `x`, `youtube`, `website`, `telegram`.
- ¿Necesitas otro icono? Ábrelo en `src/components/SocialIcons.jsx`, impórtalo de
  `react-icons` y agrégalo al mapa `MAP`. Nada más.
- `value`: el texto que se ve en la tarjeta de contacto. `color`: color del icono.

### 3. Perfiles / enfoques (IA · Frontend · TI)

El selector del hero cambia el **hero, "Sobre mí" y "Qué hago"** entre tres enfoques
definidos en `PROFILES`. Puedes compartir un enlace directo con `?perfil=`:

- `tuweb.vercel.app/` o `?perfil=ia` → IA & Automatización (por defecto)
- `?perfil=frontend` → Frontend
- `?perfil=ti` → TI & Sistemas (para enviar a empresas presenciales tipo Chronus)

Cada perfil define: `roles`, `tagline`, `intro`, `about` (párrafos), `chipsLabel` +
`chips`, y `services`. **Los chips son un simple array de texto** — cambia el título con
`chipsLabel` y los chips con `chips`:

```js
chipsLabel: 'Rubros con los que he trabajado',
chips: ['Salud & Estética', 'Bienes Raíces', 'Educación', 'y más'],
```

### 4. Activar / desactivar secciones

```js
export const SECTIONS = {
  proyectosAutomatizacion: false, // ← desactivada por ahora
  proyectosFrontend: true,
  educacion: true,
}
```

Pon `true`/`false` según lo que quieras mostrar. Al desactivar una sección, también
desaparece del menú superior automáticamente. **Los proyectos de automatización están
en `false`** hasta que tengas las imágenes listas: cámbialo a `true` para mostrarlos.

### 5. Imágenes y videos de proyectos (carrusel dinámico)

Cada proyecto (en `PROJECTS` y `FRONTEND_PROJECTS`) tiene un array `images`. Pon los
archivos en `public/proyectos/` y añade sus rutas (imágenes **y/o** videos):

```js
images: ['/proyectos/demo.mp4', '/proyectos/captura-1.png', '/proyectos/captura-2.png'],
```

El componente `Gallery` decide solo qué mostrar:

- **1 solo archivo** → se muestra estático.
- **varios archivos** → carrusel que avanza **solo** (se pausa al pasar el mouse, con el
  lightbox abierto o mientras un video reproduce) y también con flechas/puntos.
- **video** (`.mp4`, `.webm`, `.mov`) → se detecta por la extensión, se reproduce con
  controles y se marca con la etiqueta ▶ VIDEO.
- **click / ampliar** → abre el lightbox tipo galería (zoom) con navegación y teclado
  (← → Esc).
- **array vacío** → no muestra nada (sin placeholder), como en el e-commerce.

> Consejo: usa nombres sin espacios ni paréntesis (`alfanar-1.png`, no `alfanar (1).png`).

### 6. Stack técnico (agregar tecnologías)

`TECH_STACK` es un array de grupos; cada item es `{ name, brand }`:

```js
{ name: 'React', brand: 'react' },   // con logo de marca
{ name: 'Retell AI (voz)' },         // sin brand → chip con punto morado
```

- `brand` es una clave del mapa `BRAND` en `src/components/BrandIcons.jsx` (define el
  logo y color). Si omites `brand`, se muestra como chip de texto.
- Para un logo nuevo: impórtalo de `react-icons/si` en `BrandIcons.jsx` y añádelo al
  mapa `BRAND`.

### 7. Experiencia, educación, idiomas

`EXPERIENCE`, `EDUCATION`, `CERTS` y `LANGUAGES` son arrays directos: edita el texto,
las fechas y los `tags` (que también son arrays de texto).

### 8. Colores

Se definen en `tailwind.config.js`: `accent` (cian, principal) y `accent2` (morado,
complementario). Cámbialos ahí y se aplican en todo el sitio.

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
│   │   ├── ProfileTabs.jsx      # selector de enfoque (IA/Frontend/TI)
│   │   ├── Section.jsx
│   │   ├── About.jsx
│   │   ├── WhatIDo.jsx
│   │   ├── Experience.jsx
│   │   ├── Gallery.jsx          # carrusel + lightbox dinámico
│   │   ├── Projects.jsx
│   │   ├── FrontendProjects.jsx
│   │   ├── BrandIcons.jsx       # logos del stack
│   │   ├── SocialIcons.jsx      # iconos de redes
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
