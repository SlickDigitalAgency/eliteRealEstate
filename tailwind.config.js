/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E5C76B",
          dark: "#BF9B30",
        },
        navy: {
          DEFAULT: "#1A1F35",
          light: "#2A324F",
          dark: "#12162A",
        },
        background: "#000000",
        foreground: "#FFFFFF",
        card: {
          DEFAULT: "#0A0C14",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#0A0C14",
          foreground: "#FFFFFF",
        },
        primary: {
          DEFAULT: "#D4AF37",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#1A1F35",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#1A1C23",
          foreground: "#E5E5E5",
        },
        accent: {
          DEFAULT: "#D4AF37",
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "#FF4D4F",
          foreground: "#FFFFFF",
        },
        border: "#1A1F35",
        input: "#1A1C23",
        ring: "#D4AF37",
        chart: {
          1: "#D4AF37",
          2: "#FFFFFF",
          3: "#1A1F35",
          4: "#1A1C23",
          5: "#0A0C14",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
