/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        'primary': '#5BBC2E',
        'dark-text-2': '#333',
        'dark-text-3': '#494949',
        'cold-grey-30': '#B1B5BB',
        'secondary-1': '#182F59',
        'LG-1': 'linear-gradient(90deg, #1A2C82 41.67%, #26CCCC 100%)',
        'LG-2': 'linear-gradient(90deg, #51C033 0%, #091D02 100%)',
        'LG-3': 'linear-gradient(90deg, #66B172 0%, #4DA2C9 100%)',
        'indigo': "#182F59",
        'green': "#5BBC2E",
        'light-white': "#EAEAEA",
        'light-white2': "#FAFAFA",
        'light-gray': "#494949"
      },
      boxShadow :{
         'shadow1x': '0px 10px 25px rgba(0,0,0,0.18)',
         'shadow1.5x': "8px 8px 16px rgba(0,0,0,0.12)",
         'shadow2x': '10px 10px 20px rgba(0,0,0,0.25)',
         'shadow0.5x': '4px 4px 8px rgba(0,0,0,0.12)',
         "shadow3x": '-20px -15px 50px rgba(255,255,255,0.55)',
         "shadow4x": "10px 10px 30px rgba(0,0,0,0.3)",
         "shadow2.5x": "-5px 5px 20px rgba(0,0,0,0.15)",
         "shadow3.5x": "10px 10px 20px rgba(0,0,0,0.18)",
         "shadow4.5x": "0px 6px 16px rgba(0,0,0,0.20)",
         "shadow5x" : "12px 5px 20px rgba(0,0,0,0.15)",
         "shadow5.5x": "20px 15px 30px rgba(0,0,0,0.25)",
         "shadow6x": " 5px 5px 15px rgba(0,0,0,0.18)",
         "shadow6.5x": "0px 2px 8px rgba(0,0,0,0.15)",
         "shadow7x": "6px 10px 18px 0px rgba(35, 61, 104, 0.20)",
         "shadow7.5x": "2.72727px 4.09091px 8.18182px 0px rgba(24, 47, 89, 0.25);",
         "shadow8x": "0px 0px 20px rgba(0,0,0,0.5)",
         "iconShadow": "0px 0px 14px 1.5px rgba(0,0,0,0.2)"
      },
      fontFamily: {
        rajdhani : ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
}
