/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        Whitney: ["Whitney"],
        Ginto: ["Ginto"],
        ggSans: ["ggSans"],
        GintoNord : ["GintoNord"],
      },
      colors: {
        lightBlue: "#5865f2",
        bgLightColor: "#404eed",
        bgDarkClor: "#23272a",
      }
    },
  },
  plugins: [],

}
