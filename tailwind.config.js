/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5A1E2B",     // Deep Maroon
        secondary: "#F8F4EC",   // Warm Cream
        accent: "#C8A96A",      // Soft Gold
        dark: "#1A1A1A",        // Near Black
        charcoal: "#121212",    // Deep Charcoal
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      animation: {
        'kenburns': 'kenburns 20s ease-in-out infinite alternate',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
}
