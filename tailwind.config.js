module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': "415px",
    },
    extend: {
      backgroundImage: theme => ({
        'avocado': "url('./avocado.png')",
        'flower': "url('./flower.jpg')",
        'coffee': "url('./coffee.jpg')",
        'baby': "url('./baby.jpg')",
        'beach': "url('./beach.jpg')",
      })
    },
    height: {
      '240': "240px",
      '320': "320px",
      '360': "360px",
      '480': "480px",
      '520': "520px",
      '560': "560px",
      '600': "600px",
    },
    width: {
      '240': "240px",
      '300': "300px",
      '380': "380px",
      '480': "480px",
      '580': "580px",
      '600': "600px",
      '640': "640px",
      '720': "720px",
      '840': "840px",
      '960': "960px",
      '1080': "1080px",
      '1280': "1280px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
