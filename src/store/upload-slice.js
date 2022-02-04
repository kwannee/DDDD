import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: {
    eng: '',
    kor: '',
  },
  description: '',
  files: [],
  images: [],
  category: '',
  detailCategory: '',
  thumbnail: '',
  paths: [],
};

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    setEngName(state, action) {
      state.name.eng = action.payload;
    },
    setKorName(state, action) {
      state.name.kor = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setFiles(state, action) {
      state.files = action.payload;
    },
    setImages(state, action) {
      state.images = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setDetailCategory(state, action) {
      state.detailCategory = action.payload;
    },
    setThumbnail(state, action) {
      state.thumbnail = action.payload;
    },
    setMainProjectImagePath(state, action) {
      state.paths = action.payload;
    },
    clearState(state) {
      state = initialState;
    },
  },
});

export const uploadActions = uploadSlice.actions;
export default uploadSlice.reducer;
