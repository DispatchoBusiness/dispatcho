/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Make sure Tailwind scans your React files
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '450px', // Custom mobile breakpoint
      },
    },
  },
  plugins: [],
}

