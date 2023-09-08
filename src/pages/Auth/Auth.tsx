import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';

import { useAppDispatch } from '../../store/hooks';
import { logout, setUserInfo, setUserToken } from './authSlice';

import styles from './style.module.scss';

export const USER_TOKEN_KEY = 'user_token';

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
  const userToken = useSelector(({ auth }) => auth.userToken);
  const { name, email, picture } = useSelector(({ auth }) => auth);

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
    dispatch(logout());
  };

  const getUserInfo = async () => {
    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userToken}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            Accept: 'application/json',
          },
        },
      );

      const { name, email, picture }: UserInfo = data;

      dispatch(setUserInfo({ name, email, picture }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const localToken = localStorage.getItem(USER_TOKEN_KEY);

    if (localToken) {
      dispatch(setUserToken(localToken));
    }
  }, []);

  useEffect(() => {
    if (userToken) {
      getUserInfo();
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
