module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["emerald","night"], 
        darkTheme: "night"
      },
  }