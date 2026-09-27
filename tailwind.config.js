/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0F1B2D",
        pink: "#FF3D7F",
        teal: "#00D9C0",
        gold: "#F5B700",
        paper: "#FAF7F2",
        ink: "#1A1A1A",
        mute: "#6B7280",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        prose: "680px",
      },
    },
  },
  plugins: [],
};
