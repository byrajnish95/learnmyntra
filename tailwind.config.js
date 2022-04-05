module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
    extend: {
      spacing: {
        "0": "2rem"
      },

      colors : {
        "red": "#ff0000",
        "men-color": "#ee5f73",
        "orange": "#fdba74",
      },
      screens : {
        'sm': '360px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
      },
    },
  },
  plugins: [],
}
