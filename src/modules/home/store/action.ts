import { createAsyncThunk } from '@reduxjs/toolkit';
import homeServices from '@src/modules/home/domain/services/homeServices';

const PREFIX = 'home';

export const getPhotos = createAsyncThunk<[], undefined>(
  `${PREFIX}/getPhotos`,
  async () => {
    return await homeServices.getPhotos();
  },
);
