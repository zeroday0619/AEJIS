/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        certificate: "0 22px 80px rgba(10, 36, 47, 0.22)",
      },
      backgroundImage: {
        "paper-grain":
          "radial-gradient(circle at 18% 10%, rgba(255,255,255,0.48) 0 16%, transparent 42%), radial-gradient(circle at 85% 0%, rgba(255,255,255,0.3) 0 21%, transparent 49%), linear-gradient(120deg, #f5ecd8 0%, #fbf7ef 36%, #e9dcc5 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        diagnosis: {
          primary: "#c1121f",
          secondary: "#003049",
          accent: "#669bbc",
          neutral: "#102a43",
          "base-100": "#fff7e3",
          "base-200": "#f7ebd4",
          "base-300": "#ead8b8",
          info: "#3a86ff",
          success: "#2a9d8f",
          warning: "#f4a261",
          error: "#d90429",
        },
      },
    ],
    darkTheme: "diagnosis",
    logs: false,
  },
};
