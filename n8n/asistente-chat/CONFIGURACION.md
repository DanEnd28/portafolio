# ⚙️ Configuración paso a paso — Asistente de Chat

Guía detallada para dejar funcionando `asistente-danny.json`. Configuras **3 cosas**:

1. **Google Gemini** (el modelo que responde)
2. **Supabase** (memoria de la conversación)
3. **Google Sheets** (registro de las conversaciones)

Al final, importas el workflow y lo conectas.

---

## 1) Google Gemini — API key

### A. Obtener la key
1. Entra a **[aistudio.google.com](https://aistudio.google.com)** e inicia sesión con tu cuenta de Google.
2. En el menú de la izquierda haz clic en **"Get API key"** (o botón **"Create API key"**).
3. Haz clic en **"Create API key"** → elige **"Create API key in new project"** (o un proyecto existente).
4. Se genera una clave tipo `AIzaSy...`. **Cópiala** (con el botón de copiar). Guárdala; la usarás una sola vez en n8n.

> Es gratis dentro de los límites del tier gratuito de Gemini. No necesitas tarjeta.

### B. Crear la credencial en n8n
1. En n8n, arriba a la izquierda: **Credentials → Add credential** (o `+ New`).
2. Busca **"Google Gemini(PaLM) API"** y selecciónala.
3. En el campo **API Key**, pega la clave `AIzaSy...`.
4. **Name** (nombre de la credencial): `Gemini — Portafolio`.
5. Clic en **Save**. Debe quedar en verde/conectada.

### C. Asignarla en el workflow
- En el workflow, abre el nodo **"Modelo Gemini"** → campo **Credential** → elige `Gemini — Portafolio`.

---

## 2) Supabase — memoria de la conversación

El agente necesita esta memoria (si no, falla y responde el mensaje de respaldo).

### A. Datos de conexión
1. Entra a **[supabase.com](https://supabase.com)** → crea un proyecto (tier free). Elige una contraseña de base de datos y **anótala**.
2. Ve a **Project Settings → Database → Connection info** (o "Connection string"). Anota:
   - **Host** (algo como `db.xxxxx.supabase.co`)
   - **Database name**: `postgres`
   - **User**: `postgres`
   - **Port**: `5432` (o `6543` si usas el pooler)
   - **Password**: la que pusiste al crear el proyecto

### B. Credencial en n8n
1. **Credentials → Add credential → "Postgres"**.
2. Rellena Host, Database, User, Password, Port con los datos de arriba.
3. **SSL**: ponlo en **`require`** (Supabase lo pide).
4. **Name**: `Supabase — Portafolio` → **Save**.

### C. Asignarla en el workflow
- Abre el nodo **"Memoria Supabase"** → **Credential** → `Supabase — Portafolio`.
- La tabla `n8n_chat_histories` se crea sola en el primer mensaje. No tienes que crearla.

---

## 3) Google Sheets — registro de conversaciones

### A. Crear la hoja con las columnas correctas
1. Ve a **[sheets.google.com](https://sheets.google.com)** → **hoja en blanco**.
2. Ponle nombre al archivo, por ejemplo: **`Portafolio Danny`**.
3. Abajo, renombra la pestaña (haz doble clic en "Hoja 1") a exactamente: **`Conversaciones`**.
4. En la **fila 1**, escribe estos **6 encabezados**, uno por columna (respeta los nombres, sin tildes donde no las ves):

   | A | B | C | D | E | F |
   |---|---|---|---|---|---|
   | `Fecha` | `SessionID` | `Nombre` | `Telefono` | `Mensaje` | `Respuesta` |

   > ⚠️ Deben coincidir EXACTO con esos nombres — el workflow escribe por nombre de columna.

5. Copia el **ID de la hoja** desde la URL. Está entre `/d/` y `/edit`:
   `https://docs.google.com/spreadsheets/d/`**`1AbCdEf...ESTE_ES_EL_ID...xyz`**`/edit`

### B. Credencial de Google Sheets en n8n (OAuth2)

En n8n self-hosted necesitas tu propio cliente OAuth de Google (una vez):

1. Entra a **[Google Cloud Console](https://console.cloud.google.com)** → crea/elige un proyecto.
2. **APIs & Services → Library** → busca y **habilita**: **Google Sheets API** y **Google Drive API**.
3. **APIs & Services → OAuth consent screen** → tipo **External** → llena nombre de app y tu correo → guarda. En "Test users" agrega tu propio correo de Google.
4. **APIs & Services → Credentials → Create Credentials → OAuth client ID**:
   - Application type: **Web application**.
   - En **Authorized redirect URIs**, pega la URL que te muestra n8n (paso 5).
5. En n8n: **Credentials → Add credential → "Google Sheets OAuth2 API"**. n8n te muestra el **OAuth Redirect URL** (algo como `https://n8n.generalerdon.com/rest/oauth2-credential/callback`) — cópialo y pégalo en el paso 4 de Google Cloud.
6. Copia el **Client ID** y **Client Secret** de Google Cloud → pégalos en la credencial de n8n.
7. **Name**: `Google Sheets — Portafolio` → clic en **"Sign in with Google"** → autoriza con tu cuenta → debe quedar conectada.

> Atajo: si tu n8n ya tiene configurado un cliente Google global, quizá solo tengas que pulsar "Sign in with Google" sin crear el cliente. Si no, sigue los pasos 1–7.

### C. Asignarla en el workflow
1. Abre el nodo **"Registrar en Google Sheets"** → **Credential** → `Google Sheets — Portafolio`.
2. En **Document** (Sheet) → modo **By ID** → pega el **ID** del paso A.5 (reemplaza `REEMPLAZAR_ID_SHEET`).
3. En **Sheet** → elige/escribe **`Conversaciones`**.

---

## 4) Importar y activar

1. n8n → **Workflows → Import from File** → `asistente-danny.json`.
2. Asigna las 3 credenciales (pasos 1C, 2C, 3C) y el ID de la hoja.
3. Botón **Active** (arriba a la derecha) para activarlo.
4. Abre el nodo **"Recibir Mensaje del Portafolio"** y copia la **Production URL**
   (`https://n8n.generalerdon.com/webhook/asistente-danny`).
5. Ponla en `VITE_N8N_CHAT_WEBHOOK_URL` (en `.env` local y en Vercel).
6. Activa **CORS**: nodo Webhook → **Options → Allowed Origins** → `*` (o tu dominio).

---

## 5) Probar

1. Abre el portafolio, clic en el widget 💬, pon nombre y teléfono, y escribe un mensaje.
2. Debe responderte, y en tu hoja `Conversaciones` debe aparecer una fila nueva con:
   Fecha, SessionID, Nombre, Telefono, Mensaje y Respuesta.

Si algo falla, revisa la pestaña **Executions** del workflow en n8n: te dice qué nodo
falló y por qué.

---

## Resumen de credenciales → nodo

| Credencial n8n | Nodo del workflow |
|---|---|
| Google Gemini(PaLM) API | **Modelo Gemini** |
| Postgres (Supabase) | **Memoria Supabase** |
| Google Sheets OAuth2 | **Registrar en Google Sheets** |
