/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Space Grotesk', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        background: '#121317',
        surface: '#121317',
        'surface-low': '#1a1b1f',
        'surface-high': '#292a2e',
        'surface-highest': '#343539',
        primary: '#ffffff',
        'primary-container': '#e2e2e2',
        outline: '#444748',
        error: '#ffb4ab'
      },
    },
  },
  plugins: [],
}
