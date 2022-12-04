module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {},
    extend: {
      colors: {},
      boxShadow: {
        "2xl": "0px 4px 48px rgba(32, 51, 160, 0.08)",
      },
      animation: {
        spin: "spin 2s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
