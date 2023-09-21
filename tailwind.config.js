/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens:{
      sm: '576px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
    },
    extend: {},
  },
  plugins: [],
}