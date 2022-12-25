/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-elements': "hsl(209, 23%, 22%))",
        'very-darkblue-background': "hsl(207, 26%, 17%) / <alpha-value>)",
        'very-dark-blue-text': "hsl(--var(--very-dark-blue-text) / <alpha-value>)",
        'dark-gray-input': "hsl(--var(--dark-gray-input) / <alpha-value>)",
        'very-light-gray-background': "hsl(--var(--very-light-gray-background) / <alpha-value>)",
      },
      fontFamily: {
        nunito: ['Nunito Sans', "sans-serif"]
      },
      backgroundImage: {
        'moon-light': "url('/public/icons/moon-light.png')",
        'moon-dark': "url('/public/icons/moon-dark.png')"
      },
    },
  },
  plugins: [
    
  ],
}
