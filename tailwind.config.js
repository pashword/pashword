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
        blob: "blob 10s infinite ease",
        blob2: "blob 15s infinite ease",
        blob3: "blob 7s infinite ease",
        updown: "updown 2s infinite ease",
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
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        updown: {
          "0%": {
            transform: "translateY(0)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(50%)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
