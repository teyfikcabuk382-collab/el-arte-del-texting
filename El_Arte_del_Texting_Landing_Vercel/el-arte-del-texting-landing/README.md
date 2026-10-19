# El Arte del Texting — Landing page

Landing page responsive hecha con React + Vite, lista para subir a GitHub y desplegar en Vercel.

## 1. Personalizar el checkout de Hotmart

Abre `src/main.jsx` y busca:

```js
const HOTMART_CHECKOUT_URL = 'PEGA_AQUI_TU_ENLACE_DE_CHECKOUT_HOTMART';
```

Reemplaza el texto por el enlace real de checkout de tu producto en Hotmart, conservando las comillas. Todos los CTA principales usarán ese enlace.

**Antes de publicar:** no dejes el texto de ejemplo. Comprueba el checkout en móvil y escritorio.

## 2. Probar localmente

Necesitas Node.js 18 o superior.

```bash
npm install
npm run dev
```

## 3. Subir a GitHub

1. Crea un repositorio nuevo en GitHub, por ejemplo `el-arte-del-texting-landing`.
2. Descomprime este proyecto en tu computador.
3. Sube todos los archivos y carpetas del proyecto al repositorio (incluidos `package.json`, `index.html`, `src/` y `vercel.json`).

También puedes usar Git desde la carpeta:

```bash
git init
git add .
git commit -m "Primera versión de la landing El Arte del Texting"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/el-arte-del-texting-landing.git
git push -u origin main
```

Sustituye `TU-USUARIO` por tu usuario real de GitHub.

## 4. Deploy en Vercel

1. Entra en https://vercel.com/ y elige **Add New → Project**.
2. Importa el repositorio de GitHub.
3. Vercel debería detectar Vite automáticamente.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Pulsa **Deploy**.

Cada nuevo `push` a la rama conectada puede activar un nuevo despliegue automático.

## 5. Personalización rápida

- Precio mostrado: variable `PRICE` en `src/main.jsx`.
- Precio anterior de referencia: variable `oldPrice`. Mantén el precio anterior solo si realmente corresponde a una oferta legítima.
- Imágenes: URLs de Unsplash en `src/main.jsx`; puedes sustituirlas por imágenes propias o con licencia adecuada.
- SEO básico y metadatos sociales: `index.html`.

## Antes de vender

- Verifica que el PDF del ebook esté terminado y coincida con lo que promete la página.
- Revisa las condiciones de Hotmart, el precio final, impuestos y moneda.
- Añade tus datos de contacto y políticas de privacidad/devoluciones si son necesarias para tu negocio.
- Las imágenes de ejemplo son editoriales y externas; se requiere internet para cargarlas.
- La página no incluye analítica ni píxeles publicitarios todavía. Configúralos solo si vas a utilizarlos y cumples las reglas de privacidad aplicables.
- No hay reseñas inventadas ni promesas de resultados garantizados.
