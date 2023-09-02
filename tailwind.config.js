/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*html"],
  theme: {
    extend: {
      colors: {
        primary: {
          tomato: "hsl(4, 100%, 67%)",
          "light-tomato": "rgba(255, 97, 85, 0.15)",
        },
        neutral: {
          darkSlateGrey: "hsl(234, 29%, 20%)",
          charcoalGrey: "hsl(235, 18%, 26%)",
          grey: "hsl(231, 7%, 60%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
