module.exports = {
  purge: [
    './src/pages/**/*.{ts ,tsx}',
    './src/containers/**/*.{ts ,tsx}',
    './src/components/**/*.{ts ,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      '2': '2 2 0%',
      '3': '3 3 0%',
      '4': '4 4 0%',
      '5': '5 5 0%',
      '6': '6 6 0%',
      '7': '7 7 0%',
    },
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