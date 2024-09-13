/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
      fontFamily:{
        poppins:["poppins","sans-serif"]
      },
      extend: {
        colors:{
          primary:"#E6C744",
          secondary:"C2C8DA",
          black:"#000000",
          white:"#FFF",
        },
        screens: {
          sm:"480px",
        },
        content: {
          oval: 'url("../assects/banner-image-2.png")',
        },
      },
    },
    plugins: [],
  }