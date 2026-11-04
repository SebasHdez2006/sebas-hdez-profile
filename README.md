# SH Archive

Galería pública y estática de las credenciales de Sebastián Hernández. Está preparada para GitHub Pages: cada cambio que llegue a `main` publica el sitio automáticamente.

## Activar GitHub Pages

1. Abre **Settings → Pages** en el repositorio.
2. En **Build and deployment**, elige **GitHub Actions** como fuente.
3. Haz un push a `main` y espera a que termine la acción **Deploy to GitHub Pages**.
4. La dirección será `https://SebasHdez2006.github.io/sebas-hdez-profile/`.

## Gestión privada

GitHub Pages no admite una zona de administración segura: todo su código se ejecuta en el navegador y no puede proteger claves ni recibir subidas. Por eso la edición se realiza únicamente desde tu cuenta de GitHub, que es el control de acceso real del repositorio.

Para añadir un certificado:

1. Sube el PDF o imagen a `public/certificates/` desde GitHub.
2. Añade su ficha a `data/certificates.ts`, siguiendo el formato de las existentes.
3. Haz commit a `main`; Pages publicará la nueva versión.

Para eliminarlo, borra el archivo y su ficha en el mismo commit.

## Privacidad y descargas

Un sitio público debe entregar los PDFs e imágenes al navegador para poder verlos. Por lo tanto, no es técnicamente posible impedir que un visitante descargue esos archivos, los guarde desde el navegador o copie el código publicado. Si un certificado contiene información que no quieres compartir, no lo incluyas o publica una versión redactada.

Puedes mantener el repositorio privado y aun así publicar con GitHub Pages si tu plan/cuenta lo permite; eso limita el acceso al código fuente del repositorio, pero **no** a los archivos que se muestran en la página pública.

## Desarrollo local

```bash
npm install
npm run dev
```
