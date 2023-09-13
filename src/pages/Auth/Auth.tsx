import {
  GoogleLogin,
  googleLogout,
  CredentialResponse,
} from '@react-oauth/google';
import { Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout, setUserInfo, setUserToken } from './authSlice';
import { UserInfo } from '../../types/user';

import styles from './styles.module.scss';

export const USER_TOKEN_KEY = 'user_token';

const Auth = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem(USER_TOKEN_KEY);

  const { name, email, picture, userToken } = useAppSelector(
    ({ auth }) => auth,
  );

  const googleAuth = async (tokenResponse: CredentialResponse) => {
    try {
      const userToken = tokenResponse.credential || '';
      const { name, email, picture }: UserInfo = jwtDecode(userToken);

      dispatch(setUserInfo({ name, email, picture }));

      localStorage.setItem(USER_TOKEN_KEY, userToken);
      dispatch(setUserToken(userToken));
    } catch (err) {
      console.log('Login failed: ', err);
    }
  };

  const logOutHandle = () => {
    googleLogout();
    localStorage.removeItem(USER_TOKEN_KEY);
    dispatch(logout());
  };

  if (token) {
    return <Navigate to="/" />;
  }

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
