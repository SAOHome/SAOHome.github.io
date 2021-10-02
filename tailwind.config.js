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
     '1': '1rem',
     '2': '2rem',
     '3': '3rem',
     '4': '4rem',
     '40': '40rem',
     '60': '60rem',
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