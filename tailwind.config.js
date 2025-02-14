/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",  // يبحث في جميع ملفات HTML في المجلد الرئيسي
    "./js/**/*.js" // يبحث في جميع ملفات JS داخل مجلد js وأي ملفات فرعية داخله
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px", // تحديد نقطة توقف عند 475px
      },
    },
  },
  plugins: [],
};
