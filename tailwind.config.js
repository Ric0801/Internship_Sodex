/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.{html,ts}",
  ],
  theme: {
    fontSize: {
      teamName: ['12px'],
      link: ['10px'],
      teamHeader: ['35px']
    },
    extend: {
      colors: {
        'navbar': 'rgb(248 250 252)',
      }
    },
  },
  plugins: [],
}

