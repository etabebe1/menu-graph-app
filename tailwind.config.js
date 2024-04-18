/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animationDelay: {
        // custom utility name
        2000: "2s", // `2000` is the class suffix you will use in your HTML
        5000: "5s",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px)  scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },

      // colors
      colors: {
        colors: {
          // Primary colors
          "ai-blue": "#007bff",
          "deep-space-blue": "#031d44",
          "cybernetic-blue": "#00d1ff",

          // Secondary colors
          "quantum-silver": "#858585",
          "digital-gray": "#2e2e2e",
          "digital-gray-2": "#171717",
          "matrix-green": "#23d160",

          // Accent colors
          "neural-network-neon": "#fd49a0",
          "data-stream-orange": "#ff7f11",
          "innovation-gold": "#ffd700",

          // Neutral colors
          "cloud-compute-white": "#f8f9fa",
          "black-hole": "#000000",

          /* Error / Warning / Success */
          "color-error": "#dc3545" /* Red */,
          "color-warning": "#ffc107" /* Yellow */,
          "color-success": "#28a745" /* Green */,

          /* Utility colors */
          "color-text": "#212529" /* Text color */,
          "color-background": "#ffffff" /* Background color */,
        },
        gold: {
          500: "#FFD700", // A nice shade of gold.
          600: "#DAA520", // A slightly darker gold for hover state.
        },
      },
    },
  },
  plugins: [],
};
