// postcss.config.js
module.exports = {
  plugins: [
    require("@tailwindcss/postcss")(), // ✅ Correct plugin for Tailwind v4
    require("autoprefixer"),
  ],
};
