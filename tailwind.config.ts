import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary:"#141414",
      },
      backgroundImage: {
        'main-bg': "url('/jpg/mainBg.jpg')",
        'promo-bg-1': "url('/jpg/bg-promo-1.jpg')",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
        raleway: ['"Raleway"', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
} satisfies Config;
