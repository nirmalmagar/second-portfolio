/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "370px",
      sm: "576px",
      md: "768px",
      lgg: "860px",
      lg: "992px",
      llgg: "1020px",
      xl: "1200px",
      xxl: "1400px",
    },
    fontFamily: {
      courgette: ["Courgette", "cursive"],
    },
    extend: {},
  },
  plugins: [],
}

