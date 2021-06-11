module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Any additional colors here
        "theme-yellow": "#F3A712",
        "theme-orange": "#F0544F",
        "theme-white": "#ECF0F1",
        "theme-dark": "#2f323a",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
