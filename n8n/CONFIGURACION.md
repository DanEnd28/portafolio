# ⚙️ Configuración paso a paso — Chat + Contacto (n8n)

Guía completa para dejar funcionando **los dos workflows** del portafolio:

- 🤖 **Asistente de chat** (`asistente-danny.json`) → widget flotante.
- 📬 **Formulario de contacto** (`contacto-portafolio.json`) → registro + avisos.

Sigue las secciones en orden. Al final hay un **checklist**.

---

## 0. Lo que vas a necesitar (todo con tier gratuito)

| Servicio | Para qué | Lo usa |
|---|---|---|
| **n8n** | Correr los workflows | ambos |
| **Google Gemini** | Modelo del asistente | chat |
| **Supabase (Postgres)** | Memoria de conversación | chat |
| **Google Sheets** | Registro de conversaciones y contactos | ambos |
| **Gmail** | Notificaciones y auto-respuesta | contacto |
| **Meta WhatsApp Cloud API** *(opcional)* | Avisar por WhatsApp | contacto |

---

## 1. Prepara el Google Sheet

Crea **una sola hoja de cálculo** con **dos pestañas** (respeta los encabezados EXACTOS,
en la fila 1):

**Pestaña `Conversaciones`** (la llena el asistente de chat):

| Fecha | SessionID | Nombre | Telefono | Mensaje | Respuesta |
|---|---|---|---|---|---|

**Pestaña `Contactos`** (la llena el formulario):

| Fecha | Nombre | Email | Empresa | Telefono | Tipo | Mensaje |
|---|---|---|---|---|---|---|

Copia el **ID de la hoja** desde su URL (la parte entre `/d/` y `/edit`):
`https://docs.google.com/spreadsheets/d/`**`ESTE_ES_EL_ID`**`/edit`

---

## 2. Crea las credenciales en n8n

En n8n: `Credentials → New`. Crea estas y anota el nombre de cada una:

1. **Google Gemini (PaLM) API**
   - En [aistudio.google.com](https://aistudio.google.com) → *Get API key* → *Create API key*.
   - Pega la key.
2. **Postgres** (para Supabase)
   - En [supabase.com](https://supabase.com) crea un proyecto → `Project Settings → Database → Connection info`.
   - Copia host, database, user, port (5432 o 6543) y password. Activa **SSL: require** si lo pide.
3. **Google Sheets OAuth2**
   - Conecta tu cuenta de Google y autoriza.
4. **Gmail OAuth2**
   - Conecta el Gmail desde el que quieres enviar los correos.

> Para las de Google (Sheets/Gmail) necesitas un proyecto en
> [Google Cloud Console](https://console.cloud.google.com) con las APIs habilitadas
> (Sheets API, Gmail API) y una credencial OAuth 2.0 con la URL de callback que te da n8n.

---

## 3. Importa y configura el ASISTENTE (`asistente-danny.json`)

1. n8n → `Workflows → Import from File` → elige `asistente-danny.json`.
2. Abre cada nodo y asigna la credencial correcta:
   - **Modelo Gemini** → tu credencial de Gemini.
   - **Memoria Supabase** → tu credencial de Postgres. (La tabla `n8n_chat_histories` se crea sola.)
   - **Registrar en Google Sheets** → tu credencial de Sheets. Reemplaza `REEMPLAZAR_ID_SHEET`
     por el ID del paso 1 y confirma que la pestaña sea `Conversaciones`.
3. *(Opcional)* Edita el prompt en el nodo **Asistente Danny** (o pásalo a un Google Doc; ver `prompt-sistema.md`).
4. **Activa** el workflow (toggle arriba a la derecha).
5. Abre el nodo **Recibir Mensaje del Portafolio** y copia la **Production URL**
   (algo como `https://TU-N8N/webhook/asistente-danny`).

---

## 4. Importa y configura el CONTACTO (`contacto-portafolio.json`)

1. Importa `contacto-portafolio.json`.
2. Asigna credenciales:
   - **Registrar en Google Sheets** → credencial de Sheets. Reemplaza `REEMPLAZAR_ID_SHEET`
     y confirma pestaña `Contactos`.
   - **Notificar a Danny** y **Auto-responder al Visitante** → credencial de Gmail.
     (Cambia el correo destino `dannyendara28@gmail.com` si quieres otro.)
3. *(Opcional)* **Avisar por WhatsApp**: está **desactivado**. Para usarlo, consigue
   `PHONE_NUMBER_ID` y un token de Meta, reemplaza `REEMPLAZAR_PHONE_NUMBER_ID` y
   `REEMPLAZAR_TOKEN_META`, y habilita el nodo (click derecho → *Enable*).
4. **Activa** el workflow y copia la **Production URL** del nodo **Recibir Formulario**
   (`https://TU-N8N/webhook/contacto-portafolio`).

---

## 5. Conecta el portafolio (variables de entorno)

En el proyecto del portafolio, crea/edita `.env` (y en **Vercel** → Settings →
Environment Variables):

```
VITE_N8N_WEBHOOK_URL=https://TU-N8N/webhook/contacto-portafolio
VITE_N8N_CHAT_WEBHOOK_URL=https://TU-N8N/webhook/asistente-danny
```

- `VITE_N8N_WEBHOOK_URL` → formulario de contacto.
- `VITE_N8N_CHAT_WEBHOOK_URL` → widget de chat (si está vacía, el widget no aparece).

En local, reinicia `npm run dev`. En Vercel, haz **Redeploy** tras guardar las variables.

---

## 6. CORS (importante)

Como el navegador llama a n8n desde otro dominio (Vercel → n8n), abre cada nodo
**Webhook → Options → Allowed Origins (CORS)** y pon el dominio de tu portafolio
(ej. `https://tu-portafolio.vercel.app`) o `*` para pruebas.

---

## 7. Prueba de punta a punta

**Chat:**
1. Abre el portafolio, click en el widget 💬.
2. Escribe nombre y teléfono → *Empezar a chatear*.
3. Pregunta algo ("¿qué experiencia tiene Danny en n8n?").
4. Verifica: respuesta en el chat + fila nueva en la pestaña `Conversaciones`.

**Contacto:**
1. Llena el formulario de la sección Contacto y envía.
2. Verifica: fila en `Contactos` + correo de aviso en tu Gmail + correo de
   confirmación en el email que pusiste.

---

## ✅ Checklist

- [ ] Hoja de cálculo con pestañas `Conversaciones` y `Contactos` (encabezados exactos).
- [ ] Credenciales creadas: Gemini, Postgres (Supabase), Google Sheets, Gmail.
- [ ] `asistente-danny.json` importado, credenciales asignadas, `REEMPLAZAR_ID_SHEET` cambiado, **activo**.
- [ ] `contacto-portafolio.json` importado, credenciales asignadas, `REEMPLAZAR_ID_SHEET` cambiado, **activo**.
- [ ] `VITE_N8N_CHAT_WEBHOOK_URL` y `VITE_N8N_WEBHOOK_URL` configuradas (local + Vercel).
- [ ] CORS del webhook con el dominio del portafolio.
- [ ] Probado: chat registra en `Conversaciones`; contacto registra en `Contactos` y manda los 2 correos.
- [ ] *(Opcional)* WhatsApp habilitado con credenciales de Meta.

---

## 🆘 Problemas comunes

| Síntoma | Causa probable | Solución |
|---|---|---|
| El widget no aparece | `VITE_N8N_CHAT_WEBHOOK_URL` vacía | Configúrala y redeploy/reinicia |
| Error CORS en consola | Falta el origen permitido | Añade el dominio en Webhook → Options → CORS |
| El chat responde pero no escribe en Sheets | ID/hoja mal, o credencial | Revisa `REEMPLAZAR_ID_SHEET` y el nombre de pestaña |
| No llega el correo | Credencial Gmail o cuota | Revisa la credencial y los logs de la ejecución |
| El agente falla siempre | API key de Gemini o Supabase | Revisa credenciales; el visitante recibe el mensaje de respaldo |
| Respuesta "no puedo conectar" en el widget | Webhook inactivo o URL mal | Activa el workflow y verifica la Production URL |
