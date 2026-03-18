/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glass': 'rgba(15, 15, 25, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-delay-1': 'fadeInDelay 0.8s ease-out 0.2s forwards',
        'fade-in-delay-2': 'fadeInDelay 0.8s ease-out 0.4s forwards',
        'scale-in': 'scaleIn 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}