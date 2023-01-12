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
        'body-background': "hsl(0, 0%, 95%)"
      },
      backgroundImage: {
        'moon-light': "url('/public/icons/moon-light.png')",
        'moon-dark': "url('/public/icons/moon-dark.png')",
        'search': "url('/public/icons/search.png')",
        'back-arrow': "url('/public/icons/left-arrow.png')",
        'x-mark': "url('/public/icons/x-mark.png')",
        'loading-animation': "url('/public/icons/loading.gif')"
      },
    },  
    fontFamily: {
      sans: ['Nunito Sans', "sans-serif"]
    },
  },
  darkMode: 'class',
  plugins: [
    
  ],
}
