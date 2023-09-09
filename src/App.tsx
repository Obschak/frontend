import { Suspense, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import clsx from 'clsx';
import jwtDecode from 'jwt-decode';

import { Auth } from './pages/Auth';
import { Main } from './pages/Main';
import { useThemeContext } from './context/Theme';
import { Profile } from './pages/Profile';
import { UserInfo } from './types/user';
import { USER_TOKEN_KEY } from './pages/Auth/Auth';
import { useAppDispatch } from './store/hooks';
import { setUserInfo, setUserToken } from './pages/Auth/authSlice';

const App = () => {
  const { theme, toggleTheme } = useThemeContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      const userToken = localStorage.getItem(USER_TOKEN_KEY) || '';
      const { name, email, picture }: UserInfo = jwtDecode(userToken);

      dispatch(setUserInfo({ name, email, picture }));

      localStorage.setItem(USER_TOKEN_KEY, userToken);
      dispatch(setUserToken(userToken));
    } catch {}
  }, []);

  return (
    <div className={clsx('app', theme)}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Go main</Link>
      <Link to="/auth">Go auth</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
