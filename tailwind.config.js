const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['var(--font-inter)', ...fontFamily.sans],
        'poppins': ['var(--font-poppins)', ...fontFamily.serif],
        'terminal': ['var(--font-terminal)', ...fontFamily.mono]
      },
      animation: {
        blink: 'blink 1400ms ease infinite'
      },
      keyframes: {
        blink: {
          '0%, 49%': { background: '#708284'},
          '60%, 99%': { background: 'transparent'},
          '100%': { background: '#708284'},
        }
      }
    },
  },
  plugins: [],
}