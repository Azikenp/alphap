/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      maxHeight: {
        0: "0",
        200: "200px",
      },

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 65%)",
      },
    },
  },
  plugins: [],
};
