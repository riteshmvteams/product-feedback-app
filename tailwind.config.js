/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#F7F8FD",
        clrBlue: {
          100: "#F2F4FF",
          200: "#CFD7FF",
          300: "#4661E6",
          400: "#373F68",
        },
        clrText: {
          primary: "#3A4374",
          secondary: "#647196",
        },
        clrBtn: {
          voilet: "#AD1FEA",
          blue: "#4661E6",
        },
      },
    },
  },
  plugins: [],
};
