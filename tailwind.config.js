const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "320px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
      "2xl": "1920px",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        colorWhite: "#ffffff",
        colorLight: "#f0eff5",
        colorGrayLight: "#86848c",
        colorGrayDark: "#56555e",
        colorDark: "#27282f",
        colorPrimary: "#fa7986",
        colorSuccess: "rgb(34, 202, 75)",
        colorDanger: "rgb(255, 67, 54)",
        colorWarning: "rgb(234, 181, 7)",
        colorPurle: "rgb(160, 99, 245)",
        colorPrimaryLight: "rgba(71, 7, 234, 0.2)",
        colorSuccessLight: "rgba(34, 202, 75, 0.2)",
        colorDangerLight: "rgba(255, 67, 54, 0.2)",
        colorPurleLight: "rgba(160, 99, 245, 0.2)",
        //dark variant colors
        colorWhite_DM: "#131316",
        colorLight_DM: "#23232a",
        colorDark_DM: "#ddd",
        colorGrayDark_DM: "#adacb5",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
