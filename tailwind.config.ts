import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        customColor: {
          DEFAULT: "#912C5D", // Hex: #912C5D
        },
        turquoise: {
          DEFAULT: "#F3E3CC", // Hex: #F3E3CC
        },
        backgroundImage: {
          'custom-gradient': 'linear-gradient(to right, #912C5D 0%, #F3E3CC 50%, #F3E3CC 100%)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
