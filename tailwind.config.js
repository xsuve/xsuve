/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'prompt': ['Prompt', 'Helvetica', 'Arial', 'sans-serif'],
        'poppins': ['Poppins', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
