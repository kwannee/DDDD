import { configureStore } from '@reduxjs/toolkit';
import pathSlice from './path-slice';
import authSlice from './auth-slice';
import uploadSlice from './upload-slice';

const store = configureStore({
  reducer: {
    path: pathSlice,
    auth: authSlice,
    upload: uploadSlice,
  },
});

export default store;
