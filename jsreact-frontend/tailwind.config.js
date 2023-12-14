/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx',
  ],
  theme: {
    colors:{
      Branco: '#FFF',
      Verde:{
        900: '#00A2A2',
        400: '#4591AB'
      },
    },
    extend: {
      fontFamily:{
        sans: 'Roboto, sans-serif'
      }
    },
  },
  plugins: [require('daisyui')],
}

