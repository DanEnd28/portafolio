# 🤖 Asistente de Chat — Widget del Portafolio

Chatbot que vive en el portafolio como **widget flotante**. Recibe el mensaje por un
webhook, un **AI Agent** responde conociendo todo sobre Danny, la **conversación se
guarda en Supabase** (memoria por visitante) y **cada mensaje se registra en Google
Sheets**.

- **Webhook / variable:** `VITE_N8N_CHAT_WEBHOOK_URL`
- **Archivos:** `asistente-danny.json` (workflow) · `prompt-sistema.md` (system prompt editable)

> Requisitos comunes (credenciales, hoja, CORS, env): ver el [README de `n8n/`](../README.md).

---

## Arquitectura (6 fases)

```
📩 FASE 1  Webhook (POST /asistente-danny) → Normalizar Datos (message, sessionId, visitor)
🧠 FASE 2  AI Agent "Asistente Danny" (Gemini) + Memoria Postgres en Supabase (clave por sessionId)
🧹 FASE 3  Parsear y Sanitizar → extrae {reasoning, messages}
📊 FASE 4  Registrar en Google Sheets (pestaña Conversaciones)
💬 FASE 5  Responder al Widget → { reply, messages }
🚨 FASE 6  Si el agente falla → mensaje amable con el contacto de Danny
```

---

## Qué guarda en Google Sheets (pestaña `Conversaciones`)

Una fila **por cada mensaje** del visitante:

| Fecha | SessionID | Nombre | Telefono | Mensaje | Respuesta |
|---|---|---|---|---|---|

El widget pide **nombre y teléfono antes de chatear**, así cada fila queda asociada al
visitante (mismo `SessionID` para toda su conversación). El `reasoning` interno del
agente **no** se guarda. La memoria completa vive en **Supabase** (`n8n_chat_histories`).

---

## Configuración

1. n8n → `Workflows → Import from File` → `asistente-danny.json`.
2. Asigna credenciales:
   - **Modelo Gemini** → credencial de Gemini.
   - **Memoria Supabase** → credencial de Postgres (la tabla se crea sola).
   - **Registrar en Google Sheets** → credencial de Sheets; reemplaza `REEMPLAZAR_ID_SHEET`
     y confirma la pestaña `Conversaciones`.
3. *(Opcional)* Edita el prompt en el nodo **Asistente Danny** o pásalo a un Google Doc
   (ver `prompt-sistema.md`).
4. **Activa** el workflow y copia la **Production URL** del webhook →
   ponla en `VITE_N8N_CHAT_WEBHOOK_URL`.

---

## Contrato de datos

**El widget envía (POST):**
```json
{ "message": "texto", "sessionId": "uuid", "visitor": { "name": "...", "phone": "..." }, "history": [...] }
```

**El workflow responde:**
```json
{ "reply": "texto", "messages": ["msg 1", "msg 2"] }
```

El widget acepta `reply`, `messages`, `output` o texto plano.

---

## El prompt

Está en `prompt-sistema.md` y embebido en el nodo del agente. Incluye toda la info de
Danny (experiencia, stack, proyectos, contacto) y una regla clave: si preguntan por algo
que Danny no maneja, el agente **compara con lo que sí sabe** y responde que Danny se
adapta y aprende rápido — sin inventar experiencia.

## Future Updates
- Buffer Redis para agrupar mensajes rápidos · Rate limiting por `sessionId`.
- Tool para registrar leads en GoHighLevel · Vector Store (RAG) con el CV.
- Alerta por Gmail al fallar.
