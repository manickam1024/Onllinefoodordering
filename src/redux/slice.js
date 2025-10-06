const { createSlice } = require('@reduxjs/toolkit')

const slice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },

  reducers: {
    additem: (state, action) => {
      state.items.push(action.payload)
    },
    removeitem: (state) => {
      state.items.pop()
    },
  },
})

export const { additem, removeitem } = slice.actions

export default slice
