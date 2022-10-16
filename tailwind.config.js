/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./src/**/**/*.{html,js,jsx}", "./public/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#03506F",
        secondary: "#BBBBBB",
        dark: "#0A043C",
      },
    },
  },
  plugins: [],
};
