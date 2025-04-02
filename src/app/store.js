import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import usersReducer from '../features/users/usersSlice';
import formReducer from '../features/form/formSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    form: formReducer,
  },
});