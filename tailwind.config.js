/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "linear-gradient-date":
          "linear-gradient(180deg, #FF684D 0%, #FF5269 100%)",
      },
      backgroundColor: {
        "common-white-bg": "#eceae7",
        "common-black-bg": "#2b2b2b",
        "common-dark-black-bg": "#1e1e1e",
      },
      fontFamily: {
        Inter: ["Inter"],
      },
      backgroundImage: {
        "linear-gradient-date":
          "linear-gradient(180deg, #FF684D 0%, #FF5269 100%)",
      },
    },
  },
  plugins: [],
};
