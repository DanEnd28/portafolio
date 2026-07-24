# Workflows n8n del Portafolio

Esta carpeta tiene **dos** workflows, uno por cada webhook del portafolio:

| Workflow | Webhook (variable en el portafolio) | Para qué |
|---|---|---|
| `asistente-danny.json` | `VITE_N8N_CHAT_WEBHOOK_URL` | El **widget de chat** (asistente que conoce todo de Danny) |
| `contacto-portafolio.json` | `VITE_N8N_WEBHOOK_URL` | El **formulario de contacto** (registro + avisos por correo/WhatsApp) |

Archivos: `prompt-sistema.md` es el system prompt del asistente.

> 👉 **¿Solo quieres dejarlo funcionando?** Sigue la guía paso a paso con checklist:
> **[`CONFIGURACION.md`](./CONFIGURACION.md)**.

---

## 2) Workflow de contacto — `contacto-portafolio.json`

Recibe el formulario `{ nombre, email, empresa, telefono, tipo, mensaje }` y:

1. **Registra en Google Sheets** (pestaña `Contactos`: Fecha | Nombre | Email | Empresa | Telefono | Tipo | Mensaje).
2. **Te notifica por correo** (Gmail) con todos los datos del lead.
3. **Auto-responde al visitante** por correo: "recibí tu mensaje, en breve te contacto".
4. **(Opcional) WhatsApp** al número del visitante vía Meta Cloud API — nodo **desactivado**;
   actívalo poniendo `PHONE_NUMBER_ID` y token de Meta.

**Montaje:** importa el JSON, asigna credenciales **Gmail OAuth2** y **Google Sheets**,
reemplaza `REEMPLAZAR_ID_SHEET`, activa y usa su webhook en `VITE_N8N_WEBHOOK_URL`.

---

## 1) Asistente Personal de Danny — Widget de Chat (`asistente-danny.json`)

Chatbot que vive en el portafolio como **widget flotante** y responde preguntas sobre
Danny. Corre en **n8n**: recibe el mensaje por un webhook, un **AI Agent** responde
usando una base de conocimiento sobre Danny, la **conversación se guarda en Supabase**
(memoria persistente por visitante) y **cada intercambio se registra en Google Sheets**.

> ⚠️ Proyecto real de uso propio. Sigue los estándares de producción de Danny
> (naming en español, Sticky Notes por fase, manejo de errores, todo parametrizado).

---

## Arquitectura (6 fases)

```
📩 FASE 1  Webhook (POST /asistente-danny) → Normalizar Datos (message, sessionId)
🧠 FASE 2  AI Agent "Asistente Danny" (Gemini)
             + Memoria Postgres en Supabase (clave por sessionId)
             + system prompt que conoce todo de Danny
🧹 FASE 3  Parsear y Sanitizar → extrae {reasoning, messages}, arma "reply"
📊 FASE 4  Registrar en Google Sheets (Fecha | SessionID | Mensaje | Respuesta)
💬 FASE 5  Responder al Widget → JSON { reply, messages }
🚨 FASE 6  Si el agente falla → Fallback amable con el contacto directo de Danny
```

- **Supabase** = memoria de la conversación (tabla `n8n_chat_histories`, una por sesión).
- **Google Sheets** = bitácora de todo (para métricas / leads).
- `retryOnFail` en las llamadas externas; el error técnico nunca llega al visitante.

---

## Servicios (todos con tier gratuito)

### 1. Google Gemini — el modelo del agente
1. [aistudio.google.com](https://aistudio.google.com) → **Get API key**.
2. n8n: `Credentials → New → Google Gemini (PaLM) API` → pega la key.
3. Asígnala en el nodo **"Modelo Gemini"**.

### 2. Supabase (Postgres) — memoria de conversación
1. Crea un proyecto en [supabase.com](https://supabase.com) (free).
2. `Project Settings → Database → Connection info` (host, database, user, port, password).
3. n8n: `Credentials → New → Postgres` (activa SSL si lo pide) → asígnala en
   **"Memoria Supabase"**. La tabla `n8n_chat_histories` se crea sola.

### 3. Google Sheets — registro
1. Crea una hoja de cálculo y una pestaña **`Conversaciones`** con los encabezados:
   `Fecha | SessionID | Nombre | Telefono | Mensaje | Respuesta`.
2. n8n: credencial **Google Sheets OAuth2** → asígnala en **"Registrar en Google Sheets"**.
3. Copia el **ID de la hoja** (está en su URL) y reemplázalo en el nodo
   (`REEMPLAZAR_ID_SHEET`).

---

## Montaje

1. **Importa** `asistente-danny.json` en n8n (Workflows → Import from File).
2. Asigna las 3 credenciales (Gemini, Supabase/Postgres, Google Sheets).
3. Reemplaza `REEMPLAZAR_ID_SHEET` por el ID de tu hoja.
4. (Opcional) Edita el prompt en el nodo "Asistente Danny" o muévelo a un Google Doc
   (ver `prompt-sistema.md`).
5. **Activa** el workflow y copia la **URL de producción** del webhook
   (algo como `https://TU-N8N/webhook/asistente-danny`).

---

## Conectar con el portafolio

El widget de chat del portafolio (`src/components/ChatWidget.jsx`) ya está listo. Solo
necesita saber a qué webhook llamar, vía variable de entorno:

1. En el proyecto del portafolio, crea/edita `.env`:
   ```
   VITE_N8N_CHAT_WEBHOOK_URL=https://TU-N8N/webhook/asistente-danny
   ```
2. En **Vercel**: Settings → Environment Variables → agrega `VITE_N8N_CHAT_WEBHOOK_URL`
   con la misma URL y haz **Redeploy**.

Si la variable está vacía, el widget simplemente **no aparece** (no rompe la página).

### Contrato de datos

**El widget envía (POST):** — pide **nombre y teléfono** antes de chatear y los manda en `visitor`:
```json
{ "message": "texto", "sessionId": "uuid-estable", "visitor": { "name": "...", "phone": "..." }, "history": [...] }
```
Así cada fila del Google Sheet queda **por visitante** (con su nombre y teléfono para escribirle).

**El workflow responde:**
```json
{ "reply": "texto plano", "messages": ["msg 1", "msg 2"] }
```

El widget acepta `reply`, `messages`, `output` o texto plano — así que es tolerante a
cambios en el nodo de respuesta.

### CORS
Como el navegador llama al webhook desde otro dominio (Vercel → n8n), si ves un error de
CORS agrega en el nodo **Webhook → Options → Allowed Origins (CORS)** el dominio de tu
portafolio (o `*` para pruebas).

---

## El mismo patrón para el formulario de contacto

El formulario de contacto del portafolio puede apuntar a otro webhook
(`VITE_N8N_WEBHOOK_URL`) con un flujo similar (Webhook → Registrar en Sheets / crear
lead en GoHighLevel → responder). Envía `{ nombre, email, empresa, telefono, tipo,
mensaje }`.

---

## Future Updates (documentadas en el workflow)
- Buffer Redis para agrupar mensajes rápidos del mismo visitante.
- Rate limiting por `sessionId` (Redis INCR + TTL) contra abuso.
- Tool que registre leads calificados directamente en **GoHighLevel**.
- Vector Store (RAG) con el CV completo vectorizado en Supabase.
- Alerta por Gmail cuando el agente falle.
