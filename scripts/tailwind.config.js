/* Konfigurasi tema Tailwind (dimuat setelah cdn.tailwindcss.com). Ubah warna & font di sini. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Tema soft blue + neumorphism: cream = latar biru muda, ink = teks navy, ac = aksen biru lembut
        cream: { 50: "#f1f6fc", 100: "#e4ecf7", 200: "#dbe6f4", 300: "#c9d8ec" },
        ink: { 900: "#27384f", 700: "#3d5272", 500: "#6b7f9c" },
        ac: { DEFAULT: "#6f93c9", dark: "#4a6fa8" },
      },
      fontFamily: {
        script: ['"Great Vibes"', "cursive"],
        head: ['"Cormorant Garamond"', "serif"],
        serif: ['"Playfair Display"', "serif"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
};
