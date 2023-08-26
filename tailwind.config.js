/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)"
      },
      dropShadow: {
        glow: [
          "0 0px 1px rgba(255,255, 255, 0.35)",
        ]
      }
    }
  },
  plugins: [],
}

