/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  daisyui: {
    themes: [
      {
        tema1: {
          "primary":"#eca851",
          "primary-content":"#000000",
          "secondary-content":"#FFFFFF",
          "accent-content":"#FFFFFF",
          "secondary":"#f6eea1",
          "accent":"#ec825d",
          "neutral":"#f8efca",
          "info":"#efd16f",
        },
        tema2: {
          "primary-content":"#FFFFFF",
          "secondary-content":"#000000",
          "accent-content":"#FF004D",
          "primary":"#000000",
          "secondary":"3F0071",
          "accent":"FB2576",
          "neutral":"#150050",
          "info":"#5195ec",
        }
      }
    ]
  },
  theme: {
    extend: {
      colors:{
        "principal":"#E8E8E8"
      },
      fontFamily:{
        "montserrat":["Montserrat","sans"]
      }
    },
  },
  plugins: [require("daisyui")],
}

