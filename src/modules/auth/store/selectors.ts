import { RootState } from '@src/store';
import { createSelector } from '@reduxjs/toolkit';

const authModuleSelector = (state: RootState) => state.auth;

export const UserSelector = createSelector(
  authModuleSelector,
  state => state.User,
);

export const isUserLoadingSelector = createSelector(
  authModuleSelector,
  state => state.isUserLoading,
);
