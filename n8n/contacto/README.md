# 📬 Formulario de Contacto

Recibe los envíos del **formulario de contacto** del portafolio, registra el lead,
te avisa a ti por correo y **auto-responde al visitante** con correos **HTML con estilo**.

- **Webhook / variable:** `VITE_N8N_WEBHOOK_URL`
- **Archivo:** `contacto-portafolio.json`

> Requisitos comunes (credenciales, hoja, CORS, env): ver el [README de `n8n/`](../README.md).

---

## Arquitectura

```
📩 Webhook (POST /contacto-portafolio) → Normalizar Contacto
📊 Registrar en Google Sheets (pestaña Contactos)
📧 Notificar a Danny (correo HTML con los datos del lead)
💬 Auto-responder al Visitante (correo HTML "en breve te contacto")
📱 (opcional) Avisar por WhatsApp (Meta Cloud API — nodo desactivado)
✅ Responder al Formulario → { ok: true }
```

Recibe `{ nombre, email, empresa, telefono, tipo, mensaje }`.

---

## Correos HTML

Los dos correos usan un diseño de tarjeta oscura con cabecera en degradado
cian → morado (la identidad del portafolio), botones de WhatsApp/Email y son
responsive. Se generan en los nodos Gmail (`emailType: html`) con expresiones:

- **Notificar a Danny:** tarjeta con Tipo, Nombre, Email, Empresa, Teléfono, el mensaje
  destacado y un botón **"Responder a {nombre}"** (abre tu correo hacia el visitante).
- **Auto-responder al Visitante:** saludo personalizado, "en breve te contacto" y botones
  directos de WhatsApp y Email.

Para cambiar textos o colores, edita el HTML dentro del campo *Message* de cada nodo Gmail.

---

## Configuración

1. n8n → `Workflows → Import from File` → `contacto-portafolio.json`.
2. Asigna credenciales:
   - **Registrar en Google Sheets** → credencial de Sheets; reemplaza `REEMPLAZAR_ID_SHEET`
     y confirma la pestaña `Contactos`.
   - **Notificar a Danny** y **Auto-responder al Visitante** → credencial de Gmail.
     Cambia el destino `dannyendara28@gmail.com` si usas otro correo.
3. *(Opcional)* **Avisar por WhatsApp**: nodo **desactivado**. Para activarlo, consigue
   `PHONE_NUMBER_ID` y un token de la Meta Cloud API, reemplaza `REEMPLAZAR_PHONE_NUMBER_ID`
   y `REEMPLAZAR_TOKEN_META`, y habilita el nodo (click derecho → *Enable*).
4. **Activa** el workflow y copia la **Production URL** del webhook →
   ponla en `VITE_N8N_WEBHOOK_URL`.

---

## Qué guarda en Google Sheets (pestaña `Contactos`)

| Fecha | Nombre | Email | Empresa | Telefono | Tipo | Mensaje |
|---|---|---|---|---|---|---|

## Prueba
Envía el formulario del portafolio y verifica: fila nueva en `Contactos` + correo de
aviso en tu Gmail + correo de confirmación (con diseño) en el email del visitante.
