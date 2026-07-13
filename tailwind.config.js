/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#49475B",
        secondary: "#A393BF",
        button: {
          default: "#91C7B1",
          hover: "#588157",
          selected: "#BD8B9C",
          selectedText: "#F1F7ED",
        },
      },
    },
  },
  plugins: [],
};
