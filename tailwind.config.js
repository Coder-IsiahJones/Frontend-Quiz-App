/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        brandPurple: '#A729F5',
        brandDarkNavy: '#313E51',
        brandNavy: '#3B4D66',
        brandGray: '#626C7F',
        brandBluish: '#ABC1E1',
        brandLightBlue: '#F4F6FA',
        brandWhite: '#FFFFFF',
        brandGreen: '#26D782',
        brandRed: '#EE5454',
      },
      fontFamily: {
        // Add your custom font family here
        rubik: ['Rubik', 'sans'],
      },
    },
  },
  plugins: [],
};
