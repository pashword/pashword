const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "340px",
      xs: "425px",
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        blob: "blob 17s ease infinite",
      },
      width: {
        128: "32rem",
      },
      height: {
        128: "32rem",
      },
      colors: {
        slate: {
          1000: "#0b061d",
        },
      },
      blur: {
        "4xl": "72px",
        "5xl": "84px",
        "6xl": "100px",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(0px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-60px, -40px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
