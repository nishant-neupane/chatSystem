/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#833BC6",
        "primary-dark": "#0F0F0F",
        "primary-lite": "#5F6D7E",
        secondary: "#FB2E86",
      },
    },
  },
  plugins: [],
};
