/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        },
        fontFamily: {
          poppins: "var(--font-poppins), sans-serif",
        },
      },
    },
    plugins: [],
  }