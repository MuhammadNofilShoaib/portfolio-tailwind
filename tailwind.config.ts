import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightYellow: "#FBF8CC",
        customBlue: "#03045E",
        darkYellow: "#F5EE84",
        headYellow: "#F7F197",
        customBorder: "#474306",
      },
      screens: {
        customMd: "800px",
        customLg: "1263px",
        mdMob: "375px",
        lgMob: "425px",
      },
      keyframes: {
        leftAnimate: {
          'from': { opacity: '0%', transform: 'translateX(-100px)', filter: 'blur(0px)'},
          'to': { opacity: '100%', transform: 'translateX(0px)', filter: 'blur(0px)'}
        },
        rightAnimate: {
          'from': { opacity: '0%', transform: 'translateX(100px)', filter: 'blur(0px)'},
          'to': { opacity: '100%', transform: 'translateX(0px)', filter: 'blur(0px)'}
        },
        saturateAnimate: {
          'from': { filter: 'saturate(0%)'},
          'to': { filter: 'saturate(100%)'}
        }
      },
      animation: {
        leftAnimate: 'leftAnimate 1s ease-in-out',
        rightAnimate: 'rightAnimate 1s ease-in-out',
        saturateAnimate: 'saturateAnimate 1s ease-in-out'
      }
      
    },
  },
  plugins: [],
};
export default config;
