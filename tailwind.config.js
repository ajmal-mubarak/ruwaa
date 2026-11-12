/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FDFBF9',
          100: '#FAF7F2',
          200: '#F4EFE6',
          300: '#ECE3D5',
          400: '#E1D3C1',
          500: '#CFC0AB',
        },
        ink: {
          900: '#141210',
          800: '#1E1B18',
          700: '#2D2824',
          600: '#4A433D',
          500: '#6B6259',
          400: '#8C8277',
        },
        gold: {
          100: '#F9F4EB',
          200: '#F0E5D0',
          300: '#DFC79C',
          400: '#CBAA6E',
          500: '#B88E4B',
          600: '#9B7436',
          700: '#7D5C26',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cinzel', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        script: ['"Alex Brush"', '"Pinyon Script"', 'cursive'],
        arabic: ['"Amiri"', '"Aref Ruqaa"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'grain-subtle': "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(247, 243, 237, 0.4) 100%)",
      },
      letterSpacing: {
        'widest-luxury': '0.25em',
        'ultra-wide': '0.35em',
      }
    },
  },
  plugins: [],
}

