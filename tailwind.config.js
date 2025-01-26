/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B2730",
        accent: "#FFB84C",
        "accent-tint": "#FFCD82",
      },
    },
    fontFamily: {
      sans: ["Poppins"],
    },
  },
  plugins: [],
};
