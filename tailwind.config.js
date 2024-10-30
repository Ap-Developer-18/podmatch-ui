/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "24px",
        center: "true",
      },
      colors: {
        "primary-color": "#EF5B24",
        "secondary-color": "#ECECEC",
        "grey-color": "#BBBBBB",
        "body-color": "#0d0d0d",
      },
      backgroundImage: {
        "navbar-gradient":
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50.78%, rgba(255, 255, 255, 0) 100%)",
      },
      fontSize: {
        "custom-xl": "22px",
        "custom-4xl": "70px",
      },
      lineHeight: {
        120: "120%",
        127: "127%",
        130: "130%",
        140: "140%",
      },
    },
  },
  plugins: [],
};
