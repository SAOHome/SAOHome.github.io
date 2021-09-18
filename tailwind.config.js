module.exports = {
  purge: [
    './src/pages/**/*.{ts ,tsx}',
    './src/containers/**/*.{ts ,tsx}',
    './src/components/**/*.{ts ,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
     '0': '0',
     '1rem': '1rem',
     '2rem': '2rem',
     '3rem': '3rem',
     '4rem': '4rem',
     'full': '100%',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}