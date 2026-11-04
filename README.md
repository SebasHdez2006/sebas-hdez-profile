# SH Archive

Galería pública de certificados de Sebastián Hernández y panel privado de administración.

## Publicar en Vercel

1. Importa este repositorio en Vercel como proyecto **Next.js**.
2. Crea una [OAuth App de GitHub](https://github.com/settings/developers) con la URL de callback `https://TU-DOMINIO/api/auth/callback/github`.
3. Copia las variables de `.env.example` a Vercel. Genera `NEXTAUTH_SECRET` con `openssl rand -base64 32` y sustituye `NEXTAUTH_URL` por tu dominio público.
4. En GitHub, autoriza la OAuth App desde la cuenta `SebasHdez2006`. La aplicación solicita acceso `repo` únicamente para poder subir y borrar documentos desde `/admin`.

El acceso a `/admin` se comprueba tanto al iniciar sesión como en cada API del servidor: solo se admite el usuario indicado por `ADMIN_GITHUB_LOGIN`. Los documentos añadidos se versionan en el repositorio, dentro de `public/uploads/`, y el índice queda en `data/custom-certificates.json`.

Para desarrollo, copia `.env.example` como `.env.local`, completa las credenciales y ejecuta `npm install` y `npm run dev`.
