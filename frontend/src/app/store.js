import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import productReducer from '../features/product'

const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
  },
})

export default store