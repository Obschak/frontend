import React, { useEffect } from 'react';
import {
  GoogleLogin,
  googleLogout,
  CredentialResponse,
} from '@react-oauth/google';
import jwtDecode from 'jwt-decode';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout, setUserInfo, setUserToken } from './authSlice';

import styles from './styles.module.scss';

export const USER_TOKEN_KEY = 'user_token';

interface UserInfo {
  email: string;
  name: string;
  picture: string;
}

const Auth = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const userToken = useAppSelector(({ auth }) => auth.userToken);
  const { name, email, picture } = useAppSelector(({ auth }) => auth);

  const googleAuth = async (tokenResponse: CredentialResponse | null) => {
    try {
      if (tokenResponse) {
        const { name, email, picture }: UserInfo = jwtDecode(
          tokenResponse.credential || '',
        );

        dispatch(setUserInfo({ name, email, picture }));

        localStorage.setItem(USER_TOKEN_KEY, tokenResponse.credential || '');
        dispatch(setUserToken(tokenResponse.credential || ''));
      } else {
        const credential = localStorage.getItem(USER_TOKEN_KEY);
        const { name, email, picture }: UserInfo = jwtDecode(credential || '');

        dispatch(setUserInfo({ name, email, picture }));

        localStorage.setItem(USER_TOKEN_KEY, credential || '');
        dispatch(setUserToken(credential || ''));
      }
    } catch (err) {
      console.log('Login failed: ', err);
    }
  };

  const logOutHandle = () => {
    googleLogout();
    localStorage.removeItem(USER_TOKEN_KEY);
    dispatch(logout());
  };

  // const getUserInfo = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userToken}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${userToken}`,
  //           Accept: 'application/json',
  //         },
  //       },
  //     );

  //     const { name, email, picture }: UserInfo = data;

  //     dispatch(setUserInfo({ name, email, picture }));
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   if (userToken) {
  //     getUserInfo();
  //   }
  // }, [userToken]);

  useEffect(() => {
    googleAuth(null);
  }, []);

  return (
    <div className={styles.auth}>
      {userToken ? (
        <div>
          <img src={picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {name}</p>
          <p>Email Address: {email}</p>
          <br />
          <br />
          <button onClick={logOutHandle}>Log out</button>
        </div>
      ) : (
        <GoogleLogin
          logo_alignment="center"
          text="signin"
          theme="outline"
          width="350px"
          onSuccess={googleAuth}
        />
      )}
    </div>
  );
};

export default Auth;
