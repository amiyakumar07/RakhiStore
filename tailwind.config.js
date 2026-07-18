/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container-high": "#eae7e7",
        "surface-bright": "#fcf9f8",
        "error": "#ba1a1a",
        "on-primary": "#ffffff",
        "on-surface-variant": "#5b403d",
        "surface-container-highest": "#e5e2e1",
        "surface-container-lowest": "#ffffff",
        "secondary-fixed": "#ffdea3",
        "primary": "#a20513",
        "surface-container": "#f0eded",
        "on-background": "#1b1b1c",
        "on-secondary": "#ffffff",
        "surface-container-low": "#f6f3f2",
        "surface": "#fcf9f8",
        "secondary": "#7a5900",
        "secondary-container": "#fdbc13",
        "primary-container": "#c62828",
        "outline": "#8f706c",
        "background": "#fcf9f8",
        "outline-variant": "#e4beba",
        "surface-dim": "#dcd9d9",
        "on-error": "#ffffff",
        "on-surface": "#1b1b1c",
        "inverse-on-surface": "#f3f0ef"
      },
      fontFamily: {
        "body-lg": ["Inter", "sans-serif"],
        "headline-sm": ["Playfair Display", "serif"],
        "button-text": ["Poppins", "sans-serif"],
        "display-lg": ["Playfair Display", "serif"],
        "label-caps": ["Inter", "sans-serif"],
        "headline-md": ["Playfair Display", "serif"],
        "body-md": ["Inter", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"]
      },
      fontSize: {
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "headline-sm": ["24px", { "lineHeight": "1.4", "fontWeight": "600" }],
        "button-text": ["15px", { "lineHeight": "1", "letterSpacing": "0.03em", "fontWeight": "600" }],
        "display-lg": ["48px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "label-caps": ["12px", { "lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "600" }],
        "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "display-lg-mobile": ["32px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "body-sm": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }]
      },
      spacing: {
        "xs": "4px",
        "container-max": "1280px",
        "gutter": "24px",
        "margin-mobile": "16px",
        "margin-desktop": "40px",
        "xl": "80px",
        "base": "8px",
        "sm": "12px",
        "md": "24px",
        "lg": "48px"
      }
    }
  },
  plugins: [],
}
