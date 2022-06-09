module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      light: {
        primary: "#c99132",
        secondary: "#c6d860",
        accent: "#a7cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
    },

  ],
  plugins: [require("daisyui")],
}