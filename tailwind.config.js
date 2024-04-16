/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'app-primary': '#4318FF',
        'app-white': '#FFFFFF',
        'app-green': '#34A853',
        'app-red': '#EA4335',
        'app-yellow': '#FBBC05',
        'app-blue-dark': '#2B3674',
        'app-blue-light': '#4285F4',
        'app-purple-light': '#6A53FF',
        'app-background-main': '#F4F7FE',
        'app-gray': {
          50: '#f3f7fa',
          100: '#eaeff5',
          200: '#d8e2ed',
          300: '#c1cfe0',
          400: '#a7b7d2',
          500: '#90a0c4',
          600: '#707eae',
          700: '#66719c',
          800: '#545d7f',
          900: '#485067',
          950: '#2a2e3c',
        },
      },
    },
  },
  plugins: [],
};
