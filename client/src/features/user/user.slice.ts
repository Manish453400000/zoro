import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: {
    isAuthenticated: false,
    data: {}
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