import slice from './slice'

const { configureStore } = require('@reduxjs/toolkit')

const store = configureStore({
  reducer: {
    cart: slice.reducer,
  },
})

export default store
