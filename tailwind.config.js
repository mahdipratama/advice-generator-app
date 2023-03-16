/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    extend: {
      colors: {
        lightCyan: 'hsl(193, 38%, 86%)',
        neonGreen: ' hsl(150, 100%, 66%)',

        grayBlue: 'hsl(217, 19%, 38%)',
        drkGrayBlue: 'hsl(217, 19%, 24%)',
        drkBlue: 'hsl(218, 23%, 16%)',
      },

      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },

      fontSize: {
        q: '28px',
      },

      spacing: {
        center: ['0 auto'],
      },

      boxShadow: {
        btn: '#52ffa8 0px 0px 25px 1px',
      },
    },
  },
  plugins: [],
}
