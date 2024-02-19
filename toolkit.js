import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'

const addToCart = createAction('ADD_TO_CART')

// REDUCER
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload)
  })
})

const login = createAction('CREATE_SESSION')

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true
  })
})

// STORE
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
})
console.log('oncreate store : ', store.getState())

// subscirbe
store.subscribe(() => {
  console.log('STORE CHANGE : ', store.getState())
})

// dispatch
store.dispatch(addToCart({ id: 1, qty: 20 }))
store.dispatch(addToCart({ id: 2, qty: 10 }))
store.dispatch(login())
