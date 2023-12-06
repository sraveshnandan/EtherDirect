/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },

    extend: {
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
      colors: {
        primary: "#1652F0",
        secondary: "#33c481",
        light: "grey",
        "glass-bg": "rgba(255, 255, 255, 0.25)",
        "glass-bg-1": "#0f1015",
      },
      screens: {
        mf: "990px",
      },
    },
  },
  plugins: [],
};
