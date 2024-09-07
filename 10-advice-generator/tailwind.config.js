/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "neon-green":
          "0 0 10px rgba(57, 255, 20, 0.8), 0 0 20px rgba(57, 255, 20, 0.6)",
      },
      colors: {
        primary: {
          lightCyan: "hsl(193, 38%, 86%)",
          neonGreen: "hsl(150, 100%, 66%)",
        },
        neutral: {
          grayishBlue: "hsl(217, 19%, 38%)",
          darkGrayishBlue: "hsl(217, 19%, 24%)",
          darkBlue: "hsl(218, 23%, 16%)",
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        quote: "28px",
      },
    },
  },
  plugins: [],
};
