import { Navigate } from 'react-router-dom';

import { USER_TOKEN_KEY } from '../../pages/Auth/Auth';

interface Props {
  onlyUnAuth: boolean;
  children: JSX.Element;
}

const Protected = ({ onlyUnAuth = false, children }: Props) => {
  const userToken = localStorage.getItem(USER_TOKEN_KEY);

  if (onlyUnAuth && userToken) {
    return <Navigate to="/" />;
  }

  if (!onlyUnAuth && !userToken) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export const OnlyAuth = ({ children }: { children: JSX.Element }) => (
  <Protected onlyUnAuth={false}>{children}</Protected>
);
export const OnlyUnAuth = ({ children }: { children: JSX.Element }) => (
  <Protected onlyUnAuth={true}>{children}</Protected>
);
