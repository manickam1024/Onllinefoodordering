module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        shim: {
          '0%': { right: '220px' },
          '100%': { right: '-350px' },
        },
      },
      animation: {
        shimmer: 'shim 1s linear infinite',
      },
    },
  },
  plugins: [],
}
