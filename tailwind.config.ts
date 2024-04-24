import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '200px',
      'sm': '200px',
      '3sm':'300px',
      '4sm':'400px',
      '5sm':'500px',
      'xsm': '600px',
      // => @media (min-width: 640px) { ... }
      'xmd': '920px',
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      'slg': '1100px',
      // => @media (min-width: 1024px) { ... }
      'xlg': '1200px',
      'xl': '1280px',
      'xll': '1300px',
      // => @media (min-width: 1280px) { ... }
      'xlll': '1400px',
      '2xl': '1440px',
      '15s':'1500px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        inter: ["var(--font-inter)"],
        spaceGrotesk: ["var(--font-space-grotesk)"],
      },
      colors: {
        primary: "red",
        secondary: "#FFFFFF",
        tertiary: "#F1F6F5",
        quaternary: "#02ABD5",
      }
    },
  },
  plugins: [],
};
export default config;
