/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainTGrad: "#373E44",
        mainBGrad: "#191B1F",
        ld1: "#616161",
        rd1text: "#969696",
        rd1: "#363C43",
        text: "#A3ADB2",
        blackG: "#171717",
      },
      boxShadow: {
        "custom-xl": "0 23px 40px  rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

