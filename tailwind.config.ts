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
    extend: {
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...lightDefault,
          background: "linear-gradient(to bottom, #EAEAEA, #D7D7D7)",
          primary: "#1B0788",
          secondary: "#B9B9B9",
          "hover-work": "black",
          "neutral-content": "black",
          "bg-secondary": "rgb(30 41 59 / var(--tw-bg-opacity))"
        },
        dark: {
          ...darkDefault,
          "base-content": "#ffffff",
          background: "linear-gradient(to bottom, #07031b, #140c41)",
          primary: "#0A5F68",
          secondary: "#4AB2BD",
          "bg-secondary": "rgb(30 41 59 / var(--tw-bg-opacity))",
          "neutral-content": "rgb(226 232 240)"
        },
      },
    ],
  },
} satisfies Config;
