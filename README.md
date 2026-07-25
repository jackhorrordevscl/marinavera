# Journaling Terapéutico

Sitio web de Marina Vera — journaling con enfoque psicológico. Landing de 4 páginas construida con [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com), desplegada en Vercel.

## Stack

- **Astro** — genera HTML estático puro (cero JS por defecto). `astro.config.mjs` usa `build.format: "file"` para que las páginas salgan como `about.html`, `class.html`, `contact.html` en vez de subcarpetas.
- **Tailwind CSS v4** — vía `@tailwindcss/vite`, configurado en `src/styles/global.css` (bloque `@theme`). No usa Bootstrap, jQuery ni ninguna librería del sitio original.
- **astro-icon** — íconos como SVG inline (`@iconify-json/fa6-solid` / `fa6-brands` / `fa6-regular`), sin cargar la librería completa de Font Awesome desde un CDN. Ver sección "Íconos" más abajo.
- **astro:assets** — imágenes de contenido optimizadas automáticamente en build. Ver sección "Imágenes".
- **Formularios — ⚠️ pendiente.** Los 2 formularios (`contact`, `agenda`) todavía tienen los atributos de Netlify Forms (`data-netlify="true"` + honeypot), que en Vercel no hacen nada — el `<form>` haría un POST plano a una página estática y fallaría. Falta definir el backend de envío (Formspree, una Vercel Function con un proveedor de email, etc.) antes de ir a producción. Ver issue de seguimiento.
- **Sin CMS** — el contenido vive directo en los archivos `.astro` y en `src/data/courses.js`. Nadie edita esto desde un panel; los cambios de contenido son vía código.

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
```

> Los formularios no tienen backend funcional todavía (ver sección "Stack" arriba) — el envío no va a funcionar ni en local ni en producción hasta resolver eso.

## Estructura

```
src/
  layouts/BaseLayout.astro   # <head> compartido (meta/OG/favicon/fuentes), Navbar+Footer
  components/                # Navbar, Footer, AgendaForm, Icon (wrapper de astro-icon)
  data/courses.js            # fuente única de verdad de los 3 acompañamientos
  pages/                     # index.astro, about.astro, class.astro, contact.astro, 404.astro
  styles/global.css          # paleta + tipografía + tokens de Tailwind (@theme)
  assets/                    # imágenes de contenido (procesadas por astro:assets)
public/
  img/                       # solo logo.png y og-cover.png (favicon/OG, no pasan por el pipeline)
  js/interactions.js         # JS vanilla (back-to-top, toggle del menú mobile) — sin jQuery
```

## Contenido de los acompañamientos

`src/data/courses.js` es la única fuente de datos para los 3 programas (título, descripción, audiencia, temas, día/horarios). Se consume desde `index.astro` (tarjetas resumen + `<select>` del formulario) y `class.astro` (detalle completo). **No duplicar esta info a mano en los `.astro`** — si hay que cambiar un horario o un precio, se edita ahí y se propaga solo.

## Imágenes

Hay dos categorías, no se mezclan:

- **`src/assets/`** — imágenes que se renderizan dentro de una página (hero, cards de curso, foto de about, posts de redes). Se importan como módulo ES y se renderizan con `<Image />` de `astro:assets`, que optimiza el formato, infiere `width`/`height` automáticamente (evita layout shift) y genera un nombre con hash para cache inmutable. Para agregar una imagen nueva: ponerla en `src/assets/`, importarla (`import miImagen from "../assets/nombre.jpg"`) y pasarla a `<Image src={miImagen} alt="..." />`.
- **`public/img/`** — solo `logo.png` (favicon + navbar + fuente del OG) y `og-cover.png` (imagen de preview social). Estas necesitan una URL estática simple y no pasan por el pipeline de Astro. No agregar imágenes de contenido acá.

Antes de subir una imagen nueva a `src/assets/`, comprimirla igual (`npx sharp-cli -i original.png -o carpeta -f webp -q 82`) — Astro la va a optimizar más en el build, pero no hace magia si el original pesa 5MB.

## Íconos

Los íconos son SVG inline vía [astro-icon](https://github.com/natemoo-re/astro-icon), no clases de Font Awesome. Para usar uno: `<Icon name="pen-nib" class="h-4 w-4" />` (ver `src/components/Icon.astro`). Si el ícono que necesitás no está en el mapa `iconMap` de ese archivo, hay que agregarlo ahí primero — buscar el nombre real en [Iconify Fa6](https://icon-sets.iconify.design/fa6-solid/) (o `fa6-brands`/`fa6-regular`) y sumarlo al mapa.

## Paleta de marca

- Primary: `#de3163` (rosa-frutilla) / soft `#fadbd8`
- Secondary: `#f8e496` (dorado pastel, derivado de `#fcf3cf`) / soft `#fcf3cf`

Definidos en `src/styles/global.css` (`@theme`), junto con las variantes `-text` (más oscuras, pensadas para texto/íconos legibles sobre blanco). Confirmada por la clienta.

## Deploy

`vercel.json` define el build (`npm run build` → publica `dist/`), headers de seguridad (CSP estricto, sin `unsafe-inline`) y cache. El deploy es automático en cada push a la rama conectada en el dashboard de Vercel.

`site` en `astro.config.mjs` (usado para canonical/OG/sitemap) y las URLs en `public/sitemap.xml` / `public/robots.txt` usan `https://marinavera.vercel.app` como placeholder — actualizar cuando esté el dominio final.
