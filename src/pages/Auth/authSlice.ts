import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  picture: '',
  user_token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserToken(state, action) {
      state.user_token = action.payload;
    },
    setUserInfo(state, action) {
      if (!action.payload) {
        state.name = '';
        state.email = '';
        state.picture = '';
        state.user_token = null;
      } else {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.picture = action.payload.picture;
      }
    },
  },
});

export const { setUserToken, setUserInfo } = authSlice.actions;

export default authSlice.reducer;
