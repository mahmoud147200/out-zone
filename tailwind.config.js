/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030712',
          900: '#070E1E',
          850: '#0B152B',
          800: '#0F1D38',
          700: '#15274D',
          600: '#1E3A6D',
        },
        electric: {
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          glow: 'rgba(14, 165, 233, 0.45)',
        },
        brandOrange: {
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          bright: '#FF5E14',
          glow: 'rgba(255, 94, 20, 0.45)',
        }
      },
      fontFamily: {
        arabic: ['"IBM Plex Sans Arabic"', 'Cairo', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 35px -5px rgba(255, 94, 20, 0.45)',
        'glow-blue': '0 0 35px -5px rgba(14, 165, 233, 0.45)',
        'glow-combo': '0 0 40px -10px rgba(255, 94, 20, 0.3), 0 0 40px -10px rgba(14, 165, 233, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-1.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(50%)' },
        }
      }
    },
  },
  plugins: [],
}
