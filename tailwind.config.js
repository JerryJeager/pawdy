/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tertiary": "#D6A085",
        "secondary": "#F8EFEA",
        "primary": "#B85B2D"
      }
    },
  },
  plugins: [],
};
