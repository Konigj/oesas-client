module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./UI/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors:{
        'darkBlue': 'hsl(233, 26%, 24%)',
        'limeGreen': ' hsl(136, 65%, 51%)',
        'brightCyan': 'hsl(192, 70%, 51%)',
        'grayishBlue': 'hsl(233, 8%, 62%)',
        'lightGrayishBlue': 'hsl(220, 16%, 96%)',
        'veryLightGray': 'hsl(0, 0%, 98%)',
        'redPoland': 'hsla(7, 94%, 50%, 0.8)',
      }
    },
  },
  plugins: [],
}