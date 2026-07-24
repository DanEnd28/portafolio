# Workflows n8n del Portafolio

Dos flujos, **cada uno en su carpeta** con su propia guía:

| Carpeta | Flujo | Webhook (variable del portafolio) |
|---|---|---|
| [`asistente-chat/`](./asistente-chat/) | 🤖 Asistente del **widget de chat** | `VITE_N8N_CHAT_WEBHOOK_URL` |
| [`contacto/`](./contacto/) | 📬 **Formulario de contacto** (registro + correos) | `VITE_N8N_WEBHOOK_URL` |

Abre el README de cada carpeta para su configuración paso a paso.

---

## Requisitos comunes (una sola vez)

### Cuentas / credenciales (todo con tier gratuito)

| Credencial en n8n | Dónde se obtiene | La usa |
|---|---|---|
| **Google Gemini (PaLM) API** | [aistudio.google.com](https://aistudio.google.com) → Get API key | chat |
| **Postgres** (Supabase) | [supabase.com](https://supabase.com) → Project Settings → Database | chat |
| **Google Sheets OAuth2** | [Google Cloud Console](https://console.cloud.google.com) (Sheets API) | ambos |
| **Gmail OAuth2** | Google Cloud Console (Gmail API) | contacto |

### Google Sheet (una hoja, dos pestañas)

- Pestaña **`Conversaciones`** (chat): `Fecha | SessionID | Nombre | Telefono | Mensaje | Respuesta`
- Pestaña **`Contactos`** (formulario): `Fecha | Nombre | Email | Empresa | Telefono | Tipo | Mensaje`

Copia el **ID** de la hoja desde su URL (entre `/d/` y `/edit`) — lo usarás en ambos
workflows (`REEMPLAZAR_ID_SHEET`).

### Variables de entorno del portafolio (local `.env` y Vercel)

```
VITE_N8N_WEBHOOK_URL=https://TU-N8N/webhook/contacto-portafolio
VITE_N8N_CHAT_WEBHOOK_URL=https://TU-N8N/webhook/asistente-danny
```

### CORS

En cada nodo **Webhook → Options → Allowed Origins (CORS)** pon el dominio de tu
portafolio (o `*` para pruebas), porque el navegador llama a n8n desde otro dominio.

---

## Checklist rápido

- [ ] Credenciales creadas (Gemini, Postgres, Sheets, Gmail).
- [ ] Hoja con pestañas `Conversaciones` y `Contactos` (encabezados exactos).
- [ ] `asistente-chat/` importado, configurado y **activo**.
- [ ] `contacto/` importado, configurado y **activo**.
- [ ] Variables `VITE_...` en local y Vercel.
- [ ] CORS con el dominio del portafolio.
- [ ] Probado: el chat escribe en `Conversaciones`; el formulario escribe en `Contactos` y manda los 2 correos.
