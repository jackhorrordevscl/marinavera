# Journaling En Red

**Sitio web de producción para un servicio de acompañamiento psicosocial**, construido con Astro y Tailwind CSS v4, desplegado en Vercel.

[![Astro](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://journalingenred.vercel.app)

🔗 **Demo en producción:** [journalingenred.vercel.app](https://journalingenred.vercel.app)

![Preview del sitio](public/img/og-cover.jpg)

---

## Sobre el proyecto

Journaling En Red es la landing page de un servicio real de acompañamiento psicológico mediante escritura terapéutica guiada (journaling), con sede física en Santiago de Chile. El sitio comunica un posicionamiento deliberadamente **psicosocial y no clínico** — un acompañamiento de bienestar, no una sustitución de psicoterapia — y sostiene esa distinción en cada página del contenido.

El proyecto nació como un rediseño completo sobre una base existente (migrada de Netlify a Vercel) y evolucionó mediante **ciclos de auditoría técnica**: más de 90 hallazgos catalogados como issues en GitHub — bugs, accesibilidad, performance, SEO y cumplimiento legal — resueltos de forma incremental y verificada visualmente en cada entrega.

## Funcionalidades

- **Landing multi-página** — Inicio, Sobre Nosotros, Acompañamientos (con FAQ), Talleres, Contacto, más páginas legales.
- **Formularios funcionales** — contacto y agenda de citas, con honeypot anti-spam y checkbox de consentimiento explícito para el tratamiento de datos.
- **Ubicación física con mapa** — dirección de atención presencial embebida vía Google Maps, además de la modalidad online.
- **Cumplimiento legal** — política de privacidad y términos y condiciones redactados conforme a la Ley 19.628 y la Ley 21.719 de protección de datos personales de Chile.
- **SEO técnico completo** — sitemap, `robots.txt`, meta tags Open Graph / Twitter Card, datos estructurados JSON-LD (`schema.org/ProfessionalService`) con dirección postal, y verificación de propiedad en Google Search Console.
- **Accesibilidad (WCAG AA)** — contraste de color verificado, targets táctiles ≥44px, navegación por teclado, `aria-*` en componentes interactivos.
- **Rendimiento** — imágenes responsive generadas en build, fuentes autohospedadas (sin dependencias de Google Fonts), cero JavaScript de terceros, CSP estricto sin `unsafe-inline`.
- **Responsive mobile-first** — verificado en los tres breakpoints (320px, tablet, desktop) con corrección de overflow y grids rotos.

## Stack técnico

| Tecnología | Uso en este proyecto |
|---|---|
| **[Astro](https://astro.build)** | Genera HTML estático puro — cero JavaScript por defecto. Elegido para maximizar performance en un sitio de contenido sin necesidad de interactividad compleja. |
| **[Tailwind CSS v4](https://tailwindcss.com)** | Sistema de diseño con tokens propios (paleta de marca, tipografía, radios) definidos en `@theme`, sin dependencia de un framework de componentes. |
| **[astro-icon](https://github.com/natemoo-re/astro-icon)** | Íconos SVG inline vía Iconify — reemplaza la carga completa de Font Awesome (~7000 íconos) por solo los que el sitio usa. |
| **astro:assets** | Pipeline de imágenes: optimización automática, `srcset` responsive y hash de caché inmutable en build. |
| **[Formspree](https://formspree.io)** | Backend de formularios sin servidor propio — mismo endpoint para contacto y agenda, diferenciado por asunto. |
| **[@fontsource](https://fontsource.org)** | Tipografías (Literata + Public Sans) autohospedadas — elimina la transferencia de datos del visitante a Google y el round-trip de red externo. |
| **Vercel** | Deploy automático por push, headers de seguridad (CSP, `X-Frame-Options`) y cache configurados en `vercel.json`. |

## Arquitectura

```
src/
  layouts/BaseLayout.astro   # <head> compartido: meta, OG, JSON-LD, fuentes, Navbar + Footer
  components/                # Navbar, Footer, AgendaForm, FormHoneypot, Icon (wrapper de astro-icon)
  data/                      # fuente única de verdad: cursos, testimonios, redes, datos de contacto
  pages/                     # una ruta por página, sin enrutamiento dinámico
  styles/global.css          # paleta, tipografía y tokens de Tailwind (@theme)
  assets/                    # imágenes de contenido procesadas por astro:assets
public/
  img/                       # logo, favicon, og-cover — assets que necesitan URL estática
  js/interactions.js         # JS vanilla mínimo (menú móvil, botón "volver arriba")
```

Toda la información de contacto (email, teléfono, dirección, endpoint de formularios) vive en **una sola fuente**, `src/data/site.js`, para evitar que un dato cambie en un lugar y quede desactualizado en otro.

## Decisiones técnicas destacadas

- **Migración de proveedor de formularios sin downtime**: el sitio original dependía de Netlify Forms; al migrar a Vercel se reemplazó por Formspree, ajustando el Content Security Policy (`form-action`) para no romper el envío por política de seguridad del navegador.
- **Auditoría de cumplimiento normativo**: investigación activa de la Ley 21.719 (nueva ley chilena de protección de datos, vigente desde diciembre de 2026) para anticipar los requisitos legales antes de su entrada en vigencia, no reaccionar después.
- **Verificación visual real, no solo build verde**: cada tanda de cambios se valida con capturas de pantalla automatizadas (Playwright) y revisión de errores de consola, además de que el build compile sin warnings.
- **Disciplina de una sola fuente de verdad**: precios, datos de contacto y textos de honeypot centralizados para que un cambio de negocio (ej. un nuevo teléfono) se propague solo, sin buscar y reemplazar a mano.

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
```

Los formularios apuntan a Formspree (servicio externo), así que funcionan igual en local que en producción — no requieren backend propio.

## Licencia y créditos

Proyecto comercial desarrollado para un cliente real. Código fuente disponible con fines de portafolio técnico.

Desarrollado por [**Juan José Martinez**](https://github.com/jackhorrordevscl).
