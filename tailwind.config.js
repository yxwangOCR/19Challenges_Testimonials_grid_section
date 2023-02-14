/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    colors: {
      'violet': 'hsl(263, 55%, 52%)',
      'gray': 'hsl(217, 19%, 35%)',
      'dark': 'hsl(219, 29%, 14%)',
      'white': 'hsl(0, 0%, 100%)',
      'blue': 'hsl(210, 46%, 95%)',
    },
    extend: {},
  },
  plugins: [],
};
