/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "lobster": ["Lobster", "cursive"],
      },

      width: {
        "container": "1140px",
        "e-art": "350px",
        "100%":"100%",
        "user":"60px",
      },

      height: {
        "e-art": "400px",
        "border-div":"1px",
        "user":"60px",
        "purchase":"600px",
      },

      margin: {
        container: "0px auto",
        "300px": "300px",
        earth: "100px",
      },

      fontSize: {
        "logo": "32px",
        "16px": "16px",
        "earth": "56px",
        "comments":"32px",
      },

      inset: {
        "32px": "15px",
        "count-item-user":"-10px",
      },

      backgroundImage: {
        "planet": "url('/img/planet.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
        "purchase":"url('/img/purchase.jpg')",
      },

      boxShadow: {
        "shop": "0px 0px 20px #84cc16",
        "product":"0px 0px 20px #a4a4a4",
        "btn-purchase":"0px 0px 20px #bef264",
      },

      padding: {
        'c-i-u': '4px',
      },

      colors: {
        "shop-btn": "#0A4D68",
        "name-product":"#394867",
        "purchase":"#0A4D68",
      },

      textUnderlineOffset: {
        "price": '3px',
      },
    },
  },
  plugins: [],
};
