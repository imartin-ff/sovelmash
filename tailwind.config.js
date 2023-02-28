/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#F9F8FF',
        'dark': '#232323',
        'orange': '#EA5E20',
        'gray': '#393C41',
        'light-gray': "#7F889B",
        'danger': "#FAE8EC",
        'red': '#E82525',
        'light-pink': '#F9F8FF'
      },
    },

    container: {
      center: true,
      padding: "15px",
      maxWidth: {
        'xs': '100%',
        'sm': '640px',
        'md': '768px',
        'lg': '976px',
        'xl': '1232px',
        '2xl': '1232px',
      },
  },
  },
  plugins: [],
}
