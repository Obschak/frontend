import { configureStore } from '@reduxjs/toolkit';
import auth from '../pages/Auth/authSlice';

export const store = configureStore({
  reducer: { auth },
});

export type RootState = ReturnType<typeof store.getState>;
