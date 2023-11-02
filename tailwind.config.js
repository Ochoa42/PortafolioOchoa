/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'slate': 'rgba(24, 24, 35, 1)',
      },

    },
  },
  plugins: [],
}

