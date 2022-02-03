import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: '',
  detailCategory: '',
  path: 'projects/',
};

const pathSlice = createSlice({
  name: 'path',
  initialState,
  reducers: {
    setStartingPoint(state, action) {
      state.path = action.payload;
    },
    clear(state) {
      state.category = '';
      state.detailCategory = '';
      state.path = '';
    },
  },
});

export const pathActions = pathSlice.actions;
export default pathSlice.reducer;
