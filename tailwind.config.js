module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mx-shell-white": "#F0EBE0",
        "mx-dark-gray": "#343434",
        "mx-caviar": "#313031",
        "mx-cherry-red": "#EC2526",
        "mx-positive-red": "#AD2C34",
        grey: {
          50: "#909090",
          100: "#868686",
          200: "#717171",
          300: "#5D5D5D",
          400: "#484848",
          500: "#343434",
          600: "#2C2C2C",
          700: "#252525",
          800: "#1D1D1D",
          900: "#151515",
        },
        red: {
          50: "#E9A8AC",
          100: "#E5989C",
          200: "#DC777D",
          300: "#D4565E",
          400: "#CC363F",
          500: "#AD2C34",
          600: "#802127",
          700: "#541519",
          800: "#270A0C",
          900: "#000000",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
