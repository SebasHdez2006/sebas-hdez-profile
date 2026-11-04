# SH Archive

Galería pública y estática de las credenciales de Sebastián Hernández. Está preparada para GitHub Pages: cada cambio que llegue a `main` publica el sitio automáticamente.

## Activar GitHub Pages

1. Abre **Settings → Pages** en el repositorio.
2. En **Build and deployment**, elige **GitHub Actions** como fuente.
3. Haz un push a `main` y espera a que termine la acción **Deploy to GitHub Pages**.
4. La dirección será `https://SebasHdez2006.github.io/sebas-hdez-profile/`.

## Gestión del archivo

GitHub Pages no admite una zona de administración segura: todo su código se ejecuta en el navegador y no puede proteger claves ni recibir subidas. La edición del archivo se hace desde GitHub.

Solo las cuentas a las que el propietario conceda permisos de escritura pueden modificar directamente este repositorio y publicar cambios en el sitio. Si el repositorio es público, cualquier persona puede verlo, clonarlo o crear un fork, pero no puede cambiar la copia original.

Para añadir un certificado:

1. Sube el PDF o imagen a `public/certificates/` desde GitHub.
2. Añade su ficha a `data/certificates.ts`, siguiendo el formato de las existentes.
3. Haz commit a `main`; Pages publicará la nueva versión.

Para eliminarlo, borra el archivo y su ficha en el mismo commit.

## Acceso público y descargas

Este sitio está pensado para ser público y enlazarse desde un currículum. Eso implica que los PDFs e imágenes que se muestran pueden descargarse, guardarse desde el navegador y compartirse. Tampoco es posible impedir que se copie el HTML, CSS y JavaScript ya publicados.

Un repositorio público también permite que cualquiera descargue o clone su contenido. Cambiarlo a privado puede ocultar el código fuente, si tu plan/cuenta permite publicar GitHub Pages desde repositorios privados, pero **no** protege los certificados que sigan visibles en una web pública.

No publiques información que no quieras compartir. Si un certificado contiene datos sensibles, utiliza una versión redactada antes de añadirla al archivo.

## Desarrollo local

```bash
npm install
npm run dev
```
