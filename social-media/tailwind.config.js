// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      colors: {
        white: {
          A700_7e: "#ffffff7e",
          A700_33: "#ffffff33",
          A700_99: "#ffffff99",
          A700_cc: "#ffffffcc",
          A700_a2: "#ffffffa2",
          A70066: "#ffffff66",
          A700: "#ffffff",
        },
        gray: {
          100: "#f7f7f7",
          500: "#8f92a1",
          800: "#4b4c4d",
          900: "#1e1f20",
          "500_7e":"#8f92a17e",
          "900_cc":"#1e1f20cc",
          "900_33":"#1e1f2033",
          "100_6c":"#f7f7f76c",
          "900_6c":"#1e1f206c",
          "500_66":"#8f92a166",
          "500_48":"#8f92a148",
          "100_90":"#f7f7f790",
          "500_6c":"#8f92a16c",
          "900_66": "#1e1f2066", 
          "900_00": "#1e1f2000", 
          "900_7e": "#1e1f207e", 
          "500_33": "#8f92a133", 
          "500_99": "#8f92a199", 
          "500_cc": "#8f92a1cc", 
          "500_36": "#8f92a136",
        },
        light_blue: { 200: "#79d0f1", "200_33": "#79d0f133" },
        blue: { A700: "#0659fd" },
        indigo: { 600: "#39579b", A200: "#666aec" },
        green: { 400: "#53d769" },
        red: { A200: "#ff4e4e" },
      },
      fontFamily: {
        sfprodisplay: ["SF Pro Display"],
        inter: ["Inter"],
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#1e1f2000,#1e1f20cc)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
