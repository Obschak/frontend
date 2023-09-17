import { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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
import { OnlyAuth, OnlyUnAuth } from './components/AuthGuard';
import { CreateGroup } from './pages/CreateGroup';
import { Group } from './pages/Group';
import { InitialOverlay } from './components/InitialOverlay';

const App = () => {
  const { theme } = useThemeContext();
  const dispatch = useAppDispatch();

  const [showOverlay, setShowOverlay] = useState(true);

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
      {showOverlay && <InitialOverlay setShowOverlay={setShowOverlay} />}
      {!showOverlay && (
        <Suspense>
          <Routes>
            <Route
              path="/auth"
              element={
                <OnlyUnAuth>
                  <Auth />
                </OnlyUnAuth>
              }
            />
            <Route
              path="/"
              element={
                <OnlyAuth>
                  <Main />
                </OnlyAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <OnlyAuth>
                  <Profile />
                </OnlyAuth>
              }
            />
            <Route
              path="/create-group"
              element={
                <OnlyAuth>
                  <CreateGroup />
                </OnlyAuth>
              }
            />
            <Route
              path="/group"
              element={
                <OnlyAuth>
                  <Group />
                </OnlyAuth>
              }
            />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </Suspense>
      )}
    </div>
  );
};

export default App;
