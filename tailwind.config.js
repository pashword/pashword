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
      width: {
        128: "32rem",
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
