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
        postFooter: "var(--postFooter)",
        footerText: "var(--postFooterText)",
        preHeader: "var(--preHeader)",
        preHeaderText: "var(--preHeaderText)",
      },
      fontSize: {
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '24px',
        '2xl': '32px',
      },
    },
  },
  plugins: [],
} satisfies Config;
