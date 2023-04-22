import { createAsyncThunk } from '@reduxjs/toolkit';
import authServices from '@src/modules/auth/domain/services/authServices';
import { Credentials } from '@src/modules/auth/domain/interfaces/Credentials';

const PREFIX = 'auth';

export const login = createAsyncThunk<any, Credentials>(
  `${PREFIX}/login`,
  async ({ email, password }) => {
    return await authServices.login(email, password);
  },
);
export const signUp = createAsyncThunk<any, Credentials>(
  `${PREFIX}/signUp`,
  async ({ email, password }) => {
    return await authServices.signUp(email, password);
  },
);
