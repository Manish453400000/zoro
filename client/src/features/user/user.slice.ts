import { createSlice } from "@reduxjs/toolkit";
import profile from "../../assets/default/profile.jpg"


const initialState = {
  user: {
    isAuthenticated: false,
    data: {
      user: {
        avatar: profile,
      }
    }
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user.isAuthenticated = action.payload.isAuthenticated;
      state.user.data = action.payload.data;
    }
  }
})

export const { addUser } = userSlice.actions 
export default userSlice.reducer