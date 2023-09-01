/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgblack: "#0E1015",
        pwhite: "#E2E3E7",
        pgray: "#B7B8B9",
        primary: "#6723FF",
        hovprimary: "#4D12C5",
        secondary: "#4ADE80",
      },
    },
  },
  plugins: [],
};
