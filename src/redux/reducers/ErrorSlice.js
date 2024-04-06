import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'error',
  initialState: {
    errorMessage: null,
  },
  reducers: {
    displayError(state, action) {
      state.errorMessage = action.payload;
    },
    clearError(state) {
      state.errorMessage = null;
    }
  }
});

export const { displayError, clearError } = errorSlice.actions;

export default errorSlice.reducer;