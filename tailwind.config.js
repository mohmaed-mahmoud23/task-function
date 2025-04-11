/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // لتحديد جميع ملفات JS و JSX و TS و TSX داخل مجلد src
    "./public/index.html", // إضافة ملف index.html لو كنت تستخدمه
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
