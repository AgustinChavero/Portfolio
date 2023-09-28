import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        custom_mosaic: "#ced0ba",
        custom_skin: "#f3ddb6",
        custom_wall: "#d6bf93",
        custom_ice: "#f2efce",
        custom_cement: "#e1e3db",
        custom_bordoo: "#2c171c",
        custom_browno: "#71443f",
      },
    },
  },
  plugins: [],
};
export default config;
