/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#3D1A4D',
          dark: '#2A0F3D',
          light: '#4D2560',
        },
        accent: {
          magenta: '#E91E8C',
          orange: '#FF9234',
          gold: '#FFD700',
          cyan: '#00D9FF',
        },
        ludo: {
          blue: '#0052CC',
          red: '#E63946',
          yellow: '#FFD60A',
          green: '#06D6A0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3D1A4D 0%, #2A0F3D 100%)',
        'gradient-card': 'linear-gradient(135deg, #4D2560 0%, #3D1A4D 100%)',
        'gradient-button': 'linear-gradient(135deg, #FF9234 0%, #E67F1D 100%)',
        'gradient-magenta': 'linear-gradient(135deg, #E91E8C 0%, #C7166F 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
