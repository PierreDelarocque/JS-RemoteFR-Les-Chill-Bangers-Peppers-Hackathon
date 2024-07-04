/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0072B2",
        "light-blue": "#A6CEE3",
        "custom-white": "#F0F0F0",
        "light-yellow": "#F0E442",
        "dark-yellow": "#D99A00",
      },
    },
  },
  plugins: [],
};
