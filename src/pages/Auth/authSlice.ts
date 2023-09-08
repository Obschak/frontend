import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  name: string;
  email: string;
  picture: string;
  userToken: null | string;
}

interface UserInfoPayload {
  name: string;
  email: string;
  picture: string;
}

const initialState: AuthState = {
  name: '',
  email: '',
  picture: '',
  userToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserToken(state, action: PayloadAction<string>) {
      state.userToken = action.payload;
    },
    setUserInfo(state, action: PayloadAction<UserInfoPayload>) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.picture = action.payload.picture;
    },
    logout(state) {
      state.name = '';
      state.email = '';
      state.picture = '';
      state.userToken = null;
    },
  },
});

export const { setUserToken, setUserInfo, logout } = authSlice.actions;

export default authSlice.reducer;
