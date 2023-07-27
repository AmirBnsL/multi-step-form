/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '770px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '900px'},
      // => @media (max-width: 639px) { ... }
    },
    
    backgroundImage: {
      'SideBarDesktop': "url('/assets/images/bg-sidebar-desktop.svg')",
      'SideBarMobile': "url('/assets/images/bg-sidebar-mobile.svg')"
    },
    extend: {
      colors :{
        MarineBlue: 'hsl(213, 96%, 18%)',
  PurplishBlue: 'hsl(243, 100%, 62%)',
  PastelBlue: 'hsl(228, 100%, 84%)',
  LightBlue: 'hsl(206, 94%, 87%)',
  StrawberryRed: 'hsl(354, 84%, 57%)',
  CoolGray: 'hsl(231, 11%, 63%)',
  LightGray: 'hsl(229, 24%, 87%)',
  Magnolia: 'hsl(217, 100%, 97%)',
  Alabaster: 'hsl(231, 100%, 99%)',
  
      },
      content: {
        Checkmark: '\u002714',
      }
    },
  },
  plugins: [],
  corePlugins: {
    '.checkbox-container': 'custom-checkbox',
  }
}