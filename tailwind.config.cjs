/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stars': "url('./src/Assets/bgstars1.jpg')",
        'techs': "url(./src/Assets/Backgrounds/bgtech.jpg)",
        'iam': "url(./src/Assets/Backgrounds/bgagustin.jpg)"
      }
    },
  },
  plugins: [require("flowbite/plugin")],
}