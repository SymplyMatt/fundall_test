/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'blue': '#3490dc', 
      },
      screens: {
        'sm-phone': '350px',
        'phone': '450px',
        'sm': '640px',
        'sm-tab': '700px',
        'md': '1200px', 
        'mm': '900px', 
        'lg': '1500px',
        'xl': '2000px',
      },
      fontSize: {
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
      },
      colors: {
        
      },
      textColor: {
         
      },
      spacing: {
        'thin': '1px',
        'log': '8px',
        '1': '5px',
        '2': '10px',
        '3': '12px',
        '11': '11px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '13': '50px',
        '14': '56px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '30': '120px',
        '40': '160px',
        '180': '180px',
        '50': '200px',
        '100': '400px',
      },  
    },
  },
  plugins: [],
}

