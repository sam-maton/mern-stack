/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'primary-50': '#e0fcff',
      'primary-100': '#bef8fd',
      'primary-200': '#87eaf2',
      'primary-300': '#54d1db',
      'primary-400': '#38bec9',
      'primary-500': '#2cb1bc',
      'primary-600': '#14919b',
      'primary-700': '#0e7c86',
      'primary-800': '#0a6c74',
      'primary-900': '#044e54',

      black: '#222',
      white: '#fff',
      'red-light': '#f8d7da',
      'red-dark': '#842029',
      'green-light': '#d1e7dd',
      'green-dark': '#0f5132',
    },
  },
  plugins: [],
}
