/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
        main: "#0D1117",
        secondary: "#FAFAFA",
        logoBlueFirst: "rgba(42, 103, 217, 0.6)",
        logoBlueSecond: "rgba(32,68,134,0.6)",
        logoBlueFirstW: "rgba(42, 103, 217, 1)",
        logoBlueSecondW: "rgba(32,68,134,1)",
        logoRedFirst: "rgba(222,60,77,0.6)",
        logoRedSecond: "rgba(171,15,37,0.6)",
        logoRedFirstW: "rgba(222,60,77,1)",
        logoRedSecondW: "rgba(171,15,37,1)",
        darkPaperBg: "#161B22",
        buttonBackgroundColor: "yellow",
        background:
          "linear-gradient(324deg, rgba(42,103,217,1) 0%, rgba(32,68,134,1) 100%)",
        hoverBackground:
          "linear-gradient(324deg, rgba(222,60,77,1) 0%, rgba(171,15,37,1) 100%)",

      }
    },
  },
  plugins: [],
}
