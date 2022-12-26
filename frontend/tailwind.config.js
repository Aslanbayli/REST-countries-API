/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-elements': "hsl(209, 23%, 22%)",
        'very-darkblue-background': "hsl(207, 26%, 17%)",
        'very-dark-blue-text': "hsl(200, 15%, 8%)",
        'dark-gray-input': "hsl(0, 0%, 52%)",
        'very-light-gray-background': "hsl(0, 0%, 98%)",
        'body-background': "hsl(0, 0%, 90%)"
      },
      fontFamily: {
        nunito: ['Nunito Sans', "sans-serif"]
      },
      backgroundImage: {
        'moon-light': "url('/public/icons/moon-light.png')",
        'moon-dark': "url('/public/icons/moon-dark.png')",
        'search': "url('/public/icons/search.png')"
      },
    }
  },
  darkMode: 'class',
  plugins: [
    
  ],
}
