/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      "colors": {
      "lightblue": "#C9E3F3",
      "biru": {
        "50": "#3236ff",
        "100": "#282cff",
        "200": "#1e22ff",
        "300": "#1418ff",
        "400": "#0a0eff",
        "500": "#0004fd",
        "600": "#0000f3",
        "700": "#0000e9",
        "800": "#0000df",
        "900": "#0000d5"
      }
    }
    }
  },
  plugins: [],
}
