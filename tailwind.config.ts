import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Tailwind's default gray has a blue tint. Remap it to true neutral
        // so `text-gray-400` / `text-gray-500` stay strictly monochrome.
        gray: colors.neutral,
        netflix: {
          red: "#E50914",
          redDark: "#B80710",
          black: "#141414",
          dark: "#0b0b0b",
          card: "#181818",
          cardHover: "#242424",
          border: "#282828",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.06em",
      },
    },
  },
  plugins: [],
};

export default config;
