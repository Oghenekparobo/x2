/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-red": "#BE123C",
      },
      textColor: {
        "custom-red": "#BE123C",
      },
      borderColor: {
        "custom-red": "#BE123C",
        "custom-red-light": "#FF5072",
      },
    },
  },
  plugins: [],
};
