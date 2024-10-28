/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       container: {
        padding: "24px",
        center: "true",
        screens: {
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1188px",
        },
      },
    },
  },
  plugins: [],
};
