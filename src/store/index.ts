import { configureStore } from '@reduxjs/toolkit';
import auth from '../pages/Auth/authSlice';
import createGroup from '../pages/CreateGroup/createGroupSlice';

export const store = configureStore({
  reducer: { auth, createGroup },
});

export type RootState = ReturnType<typeof store.getState>;
