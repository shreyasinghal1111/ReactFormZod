import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../hooks/slice/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer
  }
})
