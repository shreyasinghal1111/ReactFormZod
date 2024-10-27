import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isAuthenticated: false
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    registerUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { loginUser, registerUser } = userSlice.actions;
export default userSlice.reducer;