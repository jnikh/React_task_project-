import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    data: null,
  },
  reducers: {
    addFormData: (state, action) => {
      state.data = action.payload;
    },
    clearFormData: (state) => {
      state.data = null;
    },
  },
});

export const { addFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;