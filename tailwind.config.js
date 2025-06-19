/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#0f1109',
        'background': '#fbfbf9',
        'primary': '#57b752',
        'secondary': '#aecfa5',
        'accent': '#87c089',
        // Additional shades for better design flexibility
        'primary-dark': '#4a9e45',
        'primary-light': '#6bc366',
        'secondary-dark': '#9bc292',
        'secondary-light': '#c1dbb8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
