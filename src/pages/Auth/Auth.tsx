import { useEffect } from 'react';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';

import { useAppDispatch } from '../../store/hooks';
import { setUserInfo, setUserToken } from './authSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import styles from './style.module.scss';

export const USER_TOKEN_KEY = 'user_token';
const localToken = localStorage.getItem(USER_TOKEN_KEY);

interface ResponseValue {
  access_token: string;
}

interface UserInfo {
  email: string;
  name: string;
  picture: string;
}

const Auth = () => {
  const dispatch = useAppDispatch();
  const userToken =
    useSelector((state: RootState) => state.auth.user_token) || localToken;
  const { name, email, picture } = useSelector(
    (state: RootState) => state.auth,
  );

  const login = useGoogleLogin({
    onSuccess: (res: ResponseValue) => {
      localStorage.setItem(USER_TOKEN_KEY, res.access_token);
      dispatch(setUserToken(res.access_token));
    },
    onError: (error) => {
      throw new Error(`Login Failed: ${error}`);
    },
  });

  const logOut = () => {
    googleLogout();
    localStorage.removeItem(USER_TOKEN_KEY);
    dispatch(setUserInfo(null));
  };

  useEffect(() => {
    if (userToken) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userToken}`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
              Accept: 'application/json',
            },
          },
        )
        .then((res) => {
          const { name, email, picture }: UserInfo = res.data;

          dispatch(setUserInfo({ name, email, picture }));
          dispatch(setUserToken(localToken));
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
  }, [userToken]);

  return (
    <div className={styles.auth}>
      <h2>React Google Login</h2>
      {name ? (
        <div>
          <img src={picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {name}</p>
          <p>Email Address: {email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      )}
    </div>
  );
};

export default Auth;
