import { createSlice } from '@reduxjs/toolkit'

const cartSLice = createSlice({
  name: 'cart',
  initialState: {
    data: JSON.parse(localStorage.getItem('cart')) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      )
      if (itemInCart) {
        itemInCart.qty++
      } else {
        state.data.push(action.payload)
      }
    },
    removeFromCart: (state, action) => {
      const index = state.data.findIndex((item) => item.id === action.payload)
      if (index !== -1) {
        state.data.splice(index, 1)
      }
    },
  },
})

export const { addToCart, removeFromCart } = cartSLice.actions
export default cartSLice.reducer
