import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/user.slice'
import messageReducer from '../features/notification/notification.slice'

export const store = configureStore({
  reducer: {
    userReducer,
    messageReducer
  },
})