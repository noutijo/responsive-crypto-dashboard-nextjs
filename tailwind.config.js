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
        colorPurple: "rgb(160, 99, 245)",
        colorPrimaryLight: "rgba(71, 7, 234, 0.2)",
        colorSuccessLight: "rgba(34, 202, 75, 0.2)",
        colorDangerLight: "rgba(255, 67, 54, 0.2)",
        colorPurpleLight: "rgba(160, 99, 245, 0.2)",
        //dark variant colors
        colorWhite_DM: "#131316",
        colorLight_DM: "#23232a",
        colorDark_DM: "#ddd",
        colorGrayDark_DM: "#adacb5",
      },
      keyframes: ({ theme }) => ({
        showmenu: {
          from: { left: "-100%" },
          to: { left: "0%" },
        },
        hidemenu: {
          from: { left: "0%" },
          to: { left: "-100%" },
        },
      }),
      animation: {
        showmenu: "showmenu 400ms ease forwards",
        hidemenu: "hidemenu 400ms ease forwards",
      },
      boxShadow: {
        card1: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        card2: "0 2rem 3rem rgba(0, 0, 0, 0.2)",
        card3: "0 2rem 3rem rgba(71, 7, 234, 0.2)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
