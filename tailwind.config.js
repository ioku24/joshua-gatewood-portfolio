/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        background: '#09090b', // Dark mode: Soft black with subtle warmth
        surface: '#151518', // Dark mode: Clearly visible card surface
        'surface-elevated': '#1c1c21', // Dark mode: Hover states and emphasis
        'light-bg': '#fafaf9', // Light mode: Warm off-white (not stark white)
        'light-surface': '#ffffff', // Light mode: Pure white for cards
        primary: '#fafafa',
        secondary: '#a1a1aa', // Zinc-400 for subtle text
        muted: '#71717a', // Zinc-500 for very subtle elements
        accent: '#6366f1', // Indigo 500 - primary action color
        'accent-hover': '#4f46e5', // Indigo 600 - hover state
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}