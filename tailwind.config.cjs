/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stars': "url('./src/Assets/bgstars1.jpg')",
        'techs': "url('https://imgs.search.brave.com/1npE-NFN4f5Awj5MdlkKJ2eZl-VFfjDZdMSr5q-18FM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhhL2E0/L2U4LzhhYTRlODI2/NGVhNmEzMzcwZjMw/M2MxZWE5MDljNWVk/LmpwZw')",
        'iam': "url(./src/Assets/Backgrounds/bgagustin.jpg)"
      }
    },
  },
  plugins: [],
}