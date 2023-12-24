/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Inter", "sans-serif"],
      },
      spacing: {
        "1vh": "1vh",
        "1vw": "1vw",
        "2vh": "2vh",
        "2vw": "2vw",
        "3vh": "3vh",
        "3vw": "3vw",
        // Add as many as you need...
      },

      width: {
        "7/10": "70%",
      },
      colors: {
        e4d9d9: "#e4d9d9",
        a1c1c1c: "#1c1c1c",
        customRed: "#ff6559",
        customPurple: "rgba(85, 0, 255, 0.88)",
      },
      gradientColorStops: (theme) => ({
        ...theme("colors"),
        "from-customRed": "#ff6559",
        "via-customRed": "#ff6559",
        "to-customPurple": "rgba(85, 0, 255, 0.88)",
      }),
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(92.11deg, #ff6559 -1.32%, rgba(85, 0, 255, 0.88) 101.69%)",
      },
    },
  },
  plugins: [],
};
