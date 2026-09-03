# MODOLAR — Landing Page Oficial

Sitio web y landing page oficial de **MODOLAR**, consultora tecnológica chilena especializada en optimización operacional mediante software a medida, integración de sistemas, adaptación de ERP y automatización.

## Filosofía
> *«La tecnología debe adaptarse a la operación, no la operación a la tecnología.»*

MODOLAR se enfoca en empresas con operaciones físicas y digitales complejas (logística, fulfillment, distribución, inventario, manufactura y comercio multicanal).

---

## Stack Tecnológico
* **Framework:** React 19 + TypeScript + Vite
* **Estilos:** Vanilla CSS con variables de diseño (`src/styles/tokens.css` y `src/styles/index.css`)
* **Tipografía:** Manrope (Google Fonts)
* **Iconografía:** `lucide-react`
* **Arquitectura:** Cero Tailwind, cero frameworks pesados, carga instantánea y optimización SEO integral (OpenGraph, Schema.org Organization).

---

## Identidad de Marca Oficial
* **Primary Navy:** `#132238`
* **Secondary Steel:** `#4D6175`
* **Accent Teal:** `#18A999`
* **Light Gray:** `#E9EEF3`
* **White:** `#FFFFFF`

---

## Instalación y Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar bundle de producción
npm run preview
```

---

## Estructura del Proyecto

```
Landing/
├── public/
│   └── assets/                # Logotipos vectoriales SVG, lockups y fotografía de operaciones
├── src/
│   ├── components/            # Componentes modulares (Navbar, Hero, Ecosistema, Formulario, etc.)
│   ├── services/              # Servicio desacoplado de recepción/envío de consultas
│   ├── styles/                # Tokens de marca y hojas de estilo Vanilla CSS
│   ├── types/                 # Definiciones de TypeScript
│   ├── App.tsx
│   └── main.tsx
├── PRODUCT.md                 # Contexto estratégico y posicionamiento
├── DESIGN.md                  # Autoridad visual y especificación de tokens
└── package.json
```
