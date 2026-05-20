// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Fraunces', 'serif'],
        'sans': ['DM Sans', 'sans-serif'],
        'display': ['DM Serif Display', 'serif'],
      },
      colors: {
        ink: '#0f0e0d',
        ink2: '#3a3832',
        ink3: '#7a7569',
        cream: '#faf8f4',
        cream2: '#f2efe8',
        cream3: '#e8e4d9',
        gold: '#c9a84c',
        gold2: '#e8c96a',
        forest: '#2d4a3e',
        rust: '#b5472a',
        sky: '#2d5a8e',
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.2s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}