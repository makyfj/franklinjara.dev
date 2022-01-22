const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: ["Inter", ...defaultTheme.fontFamily.sans],
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
}
