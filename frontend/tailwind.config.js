/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Serif", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      height: {
        "1/12": "12%",
        "1/11": "11%",
        "1/10": "10%",
        "1/9": "9%",
      }
    },
  },
  plugins: [],
};

