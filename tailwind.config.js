module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        animation: {
          shimmer: 'shim 1s ease-in-out infinite',
        },
        shim: {
          '0%': { right: '220px' },
          '100%': { right: '-350px' },
        },
      },
    },
  },
  plugins: [],
}
