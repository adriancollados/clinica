# Clínica Pérez Cuartero — Sitio Web

Proyecto Next.js para la web de la clínica, con UI moderna (Tailwind + Radix) y secciones: héroe, servicios, instalaciones, ubicación y contacto.

## Requisitos
- Node.js 20+
- npm o pnpm

## Desarrollo
```bash
npm install
npm run dev
```
Abrir en `http://localhost:9002`.

## Variables de entorno
Crear un archivo `.env.local` en la raíz. Para que estén disponibles en el cliente, usa prefijo `NEXT_PUBLIC_`.

Ejemplo:
```env
NEXT_PUBLIC_EMAIL_CLINICA=clinicaperezcuartero@gmail.com
NEXT_PUBLIC_TELEFONO_CLINICA=+34660197759
```

Estas variables se consumen vía `Consts` desde `src/lib/constants.ts`:
```ts
import { Consts } from "@/lib/constants";
// Consts.EMAIL_CLINICA, Consts.TELEFONO_CLINICA, ...
```

## Comandos
- `npm run dev`: arranca el entorno de desarrollo
- `npm run build`: build de producción
- `npm run start`: inicia el servidor (después de build)

## Despliegue en VPS (recomendado)
1) Copia el proyecto al servidor.
2) Instala dependencias: `npm ci`
3) Configura `.env`/`.env.local` con las variables anteriores.
4) Build: `npm run build`
5) Arranque: `npm run start` (recomendable detrás de un proxy como Nginx/Caddy y con un gestor de procesos como PM2 o systemd).

Notas:
- Este proyecto usa SSR (no `next export`).
- Si prefieres export estático, configura `output: 'export'` en `next.config.ts` (ver documentación de Next.js 15).

## Estructura principal
- `src/app/` — Rutas/Layouts (App Router)
- `src/components/` — Componentes UI y secciones
- `src/lib/constants.ts` — Constantes y variables de entorno (cliente/servidor)
- `public/` — Imágenes públicas (iconos de servicios, etc.)

## Personalización rápida
- Editar textos en `src/components/sections/*`
- Iconos/Imágenes en `public/`
- Colores y estilos en `tailwind.config.ts` y `src/app/globals.css`

## Contacto/Gestión de correo
- Botón WhatsApp abre chat directo con el teléfono configurado
- Enlace de correo soporta `mailto:` o abrir Gmail en nueva pestaña
- Para máxima fiabilidad, puedes implementar un formulario con endpoint propio (Nodemailer/Resend)

---
© Clínica Pérez Cuartero. Todos los derechos reservados.
