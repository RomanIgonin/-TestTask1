import { createSlice } from '@reduxjs/toolkit';
import { HomeInitialState } from '@src/modules/home/domain/interfaces/HomeInitialState';
import { getPhotos } from '@src/modules/home/store/action';

const initialState: HomeInitialState = {
  Photos: null,
  isPhotosLoading: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPhotos.pending, state => {
      state.isPhotosLoading = true;
    });
    builder.addCase(getPhotos.fulfilled, (state, { payload }) => {
      state.Photos = payload;
      state.isPhotosLoading = false;
    });
    builder.addCase(getPhotos.rejected, state => {
      state.Photos = null;
      state.isPhotosLoading = false;
    });
  },
});

export default homeSlice.reducer;
