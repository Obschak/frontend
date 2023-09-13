import { Tabs } from '../../components/Tabs';
import Avatar from './../../components/Avatar';
import { useThemeContext } from '../../context/Theme';

import sunLogo from '../../assets/images/sun.svg';
import moonLogo from '../../assets/images/moon.svg';

import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { googleLogout } from '@react-oauth/google';
import { logout } from '../Auth/authSlice';
import { USER_TOKEN_KEY } from '../Auth/Auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { toggleTheme, theme } = useThemeContext();

  const { picture, name } = useAppSelector(({ auth }) => auth);
  const themeLogo = theme === 'light' ? moonLogo : sunLogo;

  const logOutHandle = () => {
    googleLogout();
    localStorage.removeItem(USER_TOKEN_KEY);
    dispatch(logout());
    navigate('/auth');
  };

  return (
    <div className={styles.profile}>
      <main className={styles.main}>
        <div className={styles.topWrapper}>
          <h1 className={styles.heading}>Мой профиль</h1>
          <button className={styles.themeButton} onClick={toggleTheme}>
            <img src={themeLogo} alt="themeLogo" width="40px" height="40px" />
          </button>
        </div>
        <div className={styles.topWrapper}>
          <Avatar size={'large'} image={picture} />
          <div className={styles.buttonWrapper}>
            <h2 className={styles.userName}>{name}</h2>
            <button className={styles.logoutButton} onClick={logOutHandle}>
              Выйти
            </button>
          </div>
        </div>
        <div className={styles.tabsWrapper}>
          <Tabs />
        </div>
      </main>
    </div>
  );
};

export default Profile;
