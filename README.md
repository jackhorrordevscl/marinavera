# Journaling Terapéutico

Sitio web de Marina Vera — journaling con enfoque psicológico. Landing de 4 páginas construida con [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com), sin backend propio, desplegado en Netlify.

## Stack

- **Astro** — genera HTML estático puro (cero JS por defecto). `astro.config.mjs` usa `build.format: "file"` para que las páginas salgan como `about.html`, `class.html`, `contact.html` en vez de subcarpetas.
- **Tailwind CSS v4** — vía `@tailwindcss/vite`, configurado en `src/styles/global.css` (bloque `@theme`). No usa Bootstrap, jQuery ni ninguna librería del sitio original.
- **Netlify Forms** — los 2 formularios del sitio (`contact`, `agenda`) se envían con `data-netlify="true"` + honeypot, sin backend propio ni servicio externo (EmailJS, etc.). Netlify los detecta automáticamente en el HTML generado en cada build.
- **Sin CMS** — el contenido vive directo en los archivos `.astro` y en `src/data/courses.js`. Nadie edita esto desde un panel; los cambios de contenido son vía código.

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
```

> Los formularios de Netlify **no** se pueden probar end-to-end en local (`npm run dev`) — Netlify solo los detecta y procesa en un deploy real. Para probarlos hay que pushear a una rama con deploy preview activo, o a producción.

## Estructura

```
src/
  layouts/BaseLayout.astro   # <head> compartido (meta/OG/favicon/fuentes), Navbar+Footer
  components/                # Navbar, Footer, AgendaForm (formulario reutilizado en 2 páginas)
  data/courses.js            # fuente única de verdad de los 3 acompañamientos
  pages/                     # index.astro, about.astro, class.astro, contact.astro, 404.astro
  styles/global.css          # paleta + tipografía + tokens de Tailwind (@theme)
public/
  img/                       # imágenes ya optimizadas (WebP), servidas tal cual
  js/interactions.js         # JS vanilla (back-to-top, toggle del menú mobile) — sin jQuery
```

## Contenido de los acompañamientos

`src/data/courses.js` es la única fuente de datos para los 3 programas (título, descripción, audiencia, temas, día/horarios). Se consume desde `index.astro` (tarjetas resumen + `<select>` del formulario) y `class.astro` (detalle completo). **No duplicar esta info a mano en los `.astro`** — si hay que cambiar un horario o un precio, se edita ahí y se propaga solo.

## Imágenes

Todas las imágenes en `public/img` ya están optimizadas a mano (WebP, comprimidas). Si se agrega una imagen nueva:

```bash
npx sharp-cli -i "original.png" -o public/img -f webp -q 82
```

Usar nombres en minúscula sin espacios (`nombre-imagen.webp`), y agregar `width`/`height` reales al `<img>` en el componente (evita layout shift — ver `file` o `sharp-cli` para leer las dimensiones).

## Paleta de marca (fija)

- Primary (teal): `#17a2b8`
- Secondary (petróleo): `#00394f`

Definidos en `src/styles/global.css` (`@theme`). No cambiar estos dos valores sin que lo pida explícitamente quien mantiene la identidad de marca.

## Deploy

`netlify.toml` define el build (`npm run build` → publica `dist/`), headers de seguridad (CSP estricto, sin `unsafe-inline`) y cache. El deploy es automático en cada push a la rama conectada en el dashboard de Netlify.
