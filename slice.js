import { configureStore, createSlice } from '@reduxjs/toolkit'

// REDUCER & ACTION
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload)
    },
  },
})

const loginSlice = createSlice({
  name: 'login',
  initialState: { status: false },
  reducers: {
    login(state) {
      state.status = true
    },
  },
})

// STORE
const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    cart: cartSlice.reducer,
  },
})
console.log('oncreate store : ', store.getState())

// subscirbe
store.subscribe(() => {
  console.log('STORE CHANGE : ', store.getState())
})

// dispatch
store.dispatch(loginSlice.actions.login())
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 20 }))
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 10 }))
