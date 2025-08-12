/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            'primary': '#5f6fff'
        },
        gridTemplateColumns: {
            'auto': 'repeat(auto-fill, minmax(250px, 1fr))',
        }
    },
  },
  plugins: [],
}
