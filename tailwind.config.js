export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Vérifie que ce chemin inclut bien tous tes fichiers .tsx
  theme: {
    extend: {
      backgroundImage: {
        'fond-custom': "url('/fond.png')",
      },
    },
  },
  plugins: [],
};
