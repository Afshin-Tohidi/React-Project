/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          950: "#3F6745",
        },
        orange: {
          950: "#FD661FD9",
        },
      },
      fontSize: {
        xxs: "10px",
        xxxs: "5px",
      },
      width: {
        713: "713px",
        540: "540px",
      },
      lineHeight: {
        9: "9px",
      },
      margin: {
        120: "120px",
      },
    },
  },
  plugins: [],
};
