module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald", "dark"],
    darkTheme: "dark"
  },
}