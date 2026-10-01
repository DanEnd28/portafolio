# Portafolio — Danny Endara

Portafolio web personal de **Danny Endara**, AI Automation & Full-Stack Developer (n8n · agentes de IA · sistemas web). Datos de perfil: `../00_DATOS-MAESTROS.md`.

Hecho con **Next.js 16 (App Router) + TypeScript + Tailwind CSS 4**. Bilingüe (`/en` y `/es`, generadas estáticamente), tema oscuro por defecto con modo claro, tipografía Geist / Geist Mono y paleta índigo.

---

## 🚀 Correr en local

Requisitos: Node 20.9+ y npm.

```bash
npm install
cp .env.example .env.local   # opcional: webhooks de n8n
npm run dev                  # http://localhost:3000 → redirige a /en o /es
```

Otros comandos:

```bash
npm run build     # build de producción (.next/)
npm run start     # sirve el build en local (npm run start -- -p 3417 para otro puerto)
npm run lint      # ESLint
```

---

## 🌐 Rutas e idiomas

- **`/en`** (inglés, por defecto) y **`/es`** (español). Ambas se generan estáticamente.
- **`/`** redirige según el idioma del navegador (`Accept-Language`); si el visitante ya eligió idioma con el selector EN/ES, se respeta (cookie `NEXT_LOCALE`). Lo hace `src/proxy.ts`.
- El selector EN/ES cambia de ruta y **conserva `?perfil=` y el `#hash`**.
- Cada idioma tiene su `title`, `description`, OpenGraph/Twitter con imagen propia (`src/app/[lang]/opengraph-image.tsx`) y `hreflang`.

## 🎛️ Perfiles (IA · Frontend · TI)

Las pestañas del hero, "Sobre mí" y "Qué hago" van sincronizadas y se guardan en la URL:

- `/en` o `/en?perfil=ia` → IA & Automatización (por defecto)
- `/en?perfil=frontend` → Frontend
- `/es?perfil=ti` → TI & Sistemas

---

## ✏️ Personalizar — todo desde `src/content/`

**Regla general:** no hace falta tocar componentes. El contenido está en tres archivos:

| Archivo | Qué tiene |
|---|---|
| `src/content/shared.ts` | Lo que no depende del idioma: foto, CV, enlaces y redes, secciones visibles, proyectos (slug, stack, **video**), capturas frontend, logos del stack y del carrusel. |
| `src/content/es.ts` | Todos los textos en español. |
| `src/content/en.ts` | Todos los textos en inglés. |

`en.ts` y `es.ts` tienen la misma estructura (tipo `Dictionary` en `src/content/types.ts`): si agregas un campo en uno y no en el otro, `npm run build` te avisa.

### Identidad, CV y redes (`shared.ts`)
- **Foto:** reemplaza `public/foto-danny.jpg` (se recorta 4:5).
- **CV:** `PROFILE.cv`. Para PDF, pon `public/CV-Danny-Endara.pdf` y cambia la ruta.
- **Redes:** `SOCIALS` controla los botones del hero, las filas de Contacto y los iconos del footer. Los iconos disponibles están en `src/components/icons.tsx` (`SocialIcon`).

### Secciones visibles (`shared.ts`)
```ts
export const SECTIONS = { proyectosAutomatizacion: true, proyectosFrontend: true, educacion: true }
```
Al poner `false`, la sección también sale del menú.

### Perfiles, servicios, experiencia (`en.ts` / `es.ts`)
Cada perfil (`profiles.ia`, `profiles.frontend`, `profiles.ti`) define `label`, `roles`, `tagline`, `intro`, `about` (el primer párrafo es la frase destacada), `chipsLabel` + `chips`, `stats` (opcional) y `services` (con `icon`, ver la lista `IconName` en `types.ts`).

### Proyectos de automatización y videos
- Datos en `PROJECTS` (`shared.ts`), textos por slug en `projects` (`en.ts` / `es.ts`).
- Cada tarjeta muestra el diagrama del workflow (`src/lib/canvas.ts`) como póster.
- **Video opcional:** guarda el MP4 en `public/videos/<slug>.mp4` y pon `video: '/videos/<slug>.mp4'` en ese proyecto. Se reproduce en bucle, sin sonido, solo cuando la tarjeta está a la vista, y no se reproduce con "reducir movimiento". Recomendado: 16:9, 1280×720, H.264, menos de 4 MB.
- Slugs: `ai-booking-agent-dental`, `multichannel-messaging-backend`, `ghl-scheduling-tools`, `mcp-multitenant-clinic`, `n8n-error-handler`.

### Proyectos frontend
`FRONTEND_PROJECTS` (`shared.ts`): `image` es la captura de portada en `public/proyectos/` (o `null` para un icono). Textos en `frontendProjects`.

### Stack y carrusel
- `TECH_STACK` (`shared.ts`): tecnologías con logo por grupo. El resto ("También") va en `stack.groups` de `en.ts` / `es.ts`.
- `MARQUEE` (`shared.ts`): el carrusel bajo el hero.
- Logos: SVG de [simple-icons](https://simpleicons.org) en `public/logos/<nombre>.svg` (se tiñen solos según el tema).

### Colores y estilos
Los tokens del diseño (colores, radios, sombras, grano) están como variables CSS al inicio de `src/app/globals.css`, para tema oscuro y claro, y expuestos a Tailwind en el bloque `@theme inline`.

---

## 📬 Formulario de contacto

Envía `nombre, email, empresa, telefono, tipo, mensaje` al webhook del workflow de contacto (`n8n/contacto/contacto-portafolio.json`), que registra el lead en Google Sheets, te notifica y auto-responde. El valor de `tipo` llega siempre en español aunque la página esté en inglés.

- Variable: **`NEXT_PUBLIC_N8N_WEBHOOK_URL`**.
- Si está vacía, el botón abre el correo del visitante con el mensaje ya escrito.

## 🤖 Asistente de chat (widget flotante)

Conectado al asistente de n8n (`n8n/asistente-chat/`), que responde sobre Danny, guarda la conversación y la registra en Google Sheets.

- Variable: **`NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL`**. Si está vacía, el widget no aparece.
- Pide **nombre y teléfono** antes de chatear; la conversación sobrevive a recargas (localStorage) y tiene botón de reinicio.
- Activación en `CHAT` (`shared.ts`); textos en el bloque `chat` de `en.ts` / `es.ts`.
- En móvil el botón aparece al bajar del hero, para no tapar su contenido.

> **Variables de entorno:** `NEXT_PUBLIC_N8N_WEBHOOK_URL` (formulario), `NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL` (chat) y, opcional, `NEXT_PUBLIC_SITE_URL` (URL pública para OpenGraph/hreflang; en Vercel se usa el dominio de producción si falta). Ver `.env.example`. Como son `NEXT_PUBLIC_*`, se incrustan al compilar: tras cambiarlas hay que hacer **Redeploy**.

---

## ☁️ Desplegar en Vercel

`vercel.json` fuerza el preset de Next.js (`{"framework": "nextjs"}`), porque el proyecto de Vercel estaba configurado como Vite.

1. En Vercel → **Settings → Environment Variables**: crea `NEXT_PUBLIC_N8N_WEBHOOK_URL` y `NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL` (los mismos valores que tenían las antiguas `VITE_…`; puedes borrar las `VITE_…`).
2. En **Settings → Build & Development**: si quedó "Output Directory = dist" como override, quítalo.
3. Haz push o **Redeploy**.

Guía general: **`../DESPLIEGUE_VERCEL.md`**.

---

## 🗂️ Estructura

```
portafolio/
├── n8n/                          # workflows del chat y del formulario
├── public/
│   ├── foto-danny.jpg · CV-Danny-Endara.docx · favicon.svg
│   ├── logos/                    # SVG de simple-icons
│   ├── proyectos/                # capturas frontend
│   └── videos/                   # (opcional) <slug>.mp4 de proyectos
├── src/
│   ├── app/
│   │   ├── globals.css           # tokens del diseño + estilos
│   │   └── [lang]/
│   │       ├── layout.tsx        # <html lang>, metadata por idioma, tema sin parpadeo
│   │       ├── page.tsx          # arma las secciones
│   │       ├── opengraph-image.tsx
│   │       └── twitter-image.tsx
│   ├── components/
│   │   ├── sections.tsx          # secciones (server components)
│   │   ├── icons.tsx             # iconos de trazo y de redes
│   │   └── client/               # Nav, pestañas, chat, formulario, video, efectos
│   ├── content/                  # ← EDITA AQUÍ: shared.ts, en.ts, es.ts, types.ts
│   ├── lib/canvas.ts             # diagramas n8n de los proyectos
│   └── proxy.ts                  # "/" → /en o /es
├── .env.example
├── next.config.ts
├── vercel.json
└── package.json
```
