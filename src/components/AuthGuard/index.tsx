import { Navigate } from 'react-router-dom';
import { USER_TOKEN_KEY } from '../../pages/Auth/Auth';

export const AuthGuard = () => {
  const userToken = localStorage.getItem(USER_TOKEN_KEY);

  if (!userToken) {
    return <Navigate to="/auth" />;
  }

  return null;
};
