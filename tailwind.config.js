import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        'xs': '480px', // Extra-small screens
        'sm': '640px', // Small screens
        'md': '768px', // Medium screens (default)
        'lg': '1024px', // Large screens
        'xl': '1280px', // Extra-large screens
        '2xl': '1536px', // 2x extra-large screens
        'mb': '576px',
      },
      spacing: {
        'custom-large': '400px',
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};

export default config;
