/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mintAccent: '#4C9B86',
        mint: '#9FD4C3',
        gold: '#D6A85E',
        sand: '#F3EDE4',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(22, 28, 45, 0.08)',
      },
    },
  },
  plugins: [],
}

