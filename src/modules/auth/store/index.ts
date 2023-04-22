import { createSlice } from '@reduxjs/toolkit';
import { login, signUp } from './action';
import { AuthInitialState } from '@src/modules/auth/domain/interfaces/AuthInitialState';

const initialState: AuthInitialState = {
  User: null,
  isUserLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut(state) {
      state.User = null;
    },
    setUser(state, { payload }) {
      state.User = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.isUserLoading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.User = payload;
      state.isUserLoading = false;
    });
    builder.addCase(login.rejected, state => {
      state.User = null;
      state.isUserLoading = false;
    });

    builder.addCase(signUp.pending, state => {
      state.isUserLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.User = payload;
      state.isUserLoading = false;
    });
    builder.addCase(signUp.rejected, state => {
      state.User = null;
      state.isUserLoading = false;
    });
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
