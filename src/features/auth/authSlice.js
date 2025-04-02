import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  users: [], 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      const { email, password } = action.payload;
      const userExists = state.users.some(user => user.email === email);
      
      if (!userExists) {
        state.users.push({ email, password });
      }
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(user => user.email === email && user.password === password);
      
      if (user) {
        state.user = user;
        state.isAuthenticated = true;
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;