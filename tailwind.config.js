/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#F5F1EB",
        green: {
          primary: "#6B7D3A",
          dark: "#4E5B2A",
        },
        text: {
          primary: "#1E1E1E",
          secondary: "#6B6B6B",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

