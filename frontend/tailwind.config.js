/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./src/*.tsx"
  ],
  theme: {
    colors: {
      'dark-blue-elements': "hsl(--var(--dark-blue-elements) / <alpha-value>)",
      'very-darkblue-background': "hsl(--var(--very-darkblue-background) / <alpha-value>)",
      'very-dark-blue-text': "hsl(--var(--very-dark-blue-text) / <alpha-value>)",
      'dark-gray-input': "hsl(--var(--dark-gray-input) / <alpha-value>)",
      'very-light-gray-background': "hsl(--var(--very-light-gray-background) / <alpha-value>)",
    },
    fontFamily: {
      nunito: ['Nunito Sans', "sans-serif"]
    },
    extend: {
      backgroundImage: {
        'moon-light': "url('/public/icons/moon-light.png')",
        'moon-dark': "url('/public/icons/moon-dark.png')"
      },
    },
  },
  plugins: [],
}
