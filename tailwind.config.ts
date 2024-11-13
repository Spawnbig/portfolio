import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import {
  light as lightDefault,
  dark as darkDefault,
} from "daisyui/src/theming/themes";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...lightDefault,
          background: "linear-gradient(to bottom, #EAEAEA, #D7D7D7)",
          primary: "#4330ab",
          secondary: "#B9B9B9",
          "hover-work": "black",
          "neutral-content": "black",
          accent: "#4330ab",
        },
        dark: {
          ...darkDefault,
          "base-content": "#ffffff",
          background: "linear-gradient(270deg, #07031b, #382E73, #261489, #140c41)",
          primary: "#0A5F68",
          secondary: "rgb(30 41 59)",
          "neutral-content": "rgb(226 232 240)",
        },
      },
    ],
  },
} satisfies Config;
