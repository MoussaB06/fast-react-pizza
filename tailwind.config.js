/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pizza: '#123456',
      },
      height: { screen: '100dvh' },
    },
  },
  plugins: [],
};
