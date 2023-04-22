import { RootState } from '@src/store';
import { createSelector } from '@reduxjs/toolkit';

const homeModuleSelector = (state: RootState) => state.home;

export const PhotosSelector = createSelector(
  homeModuleSelector,
  state => state.Photos,
);
export const isPhotosLoadingSelector = createSelector(
  homeModuleSelector,
  state => state.isPhotosLoading,
);
