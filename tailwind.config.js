import daisyui from 'daisyui'

export default {
  darkMode: 'class', // enables class-based dark mode
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1E40AF",
          "secondary": "#F43F5E",
          "accent": "#10B981",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
      "dark", "cupcake" // optional predefined themes
    ],
  }
};