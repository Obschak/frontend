import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import { motion } from 'framer-motion';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Tabs } from '../../components/Tabs';
import Avatar from './../../components/Avatar';
import { useThemeContext } from '../../context/Theme';
import { logout } from '../Auth/authSlice';
import { USER_TOKEN_KEY } from '../Auth/Auth';
import sunLogo from '../../assets/images/sun.svg';
import moonLogo from '../../assets/images/moon.svg';
import {
  headingVariants,
  tabsVariants,
  avatarVariants,
  themeButtonVariants,
  exitButtonVariants,
} from '../../variants';

import styles from './styles.module.scss';

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
          <motion.h1
            className={styles.heading}
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            Мой профиль
          </motion.h1>
          <motion.button
            className={styles.themeButton}
            onClick={toggleTheme}
            variants={themeButtonVariants}
            initial="hidden"
            animate="visible"
            whileTap="whileTap"
          >
            <img src={themeLogo} alt="themeLogo" width="40px" height="40px" />
          </motion.button>
        </div>
        <div className={styles.topWrapper}>
          <motion.div
            variants={avatarVariants}
            initial="hidden"
            animate="visible"
          >
            <Avatar size={'large'} image={picture} />
          </motion.div>
          <div className={styles.buttonWrapper}>
            <motion.h2
              className={styles.userName}
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              {name}
            </motion.h2>
            <motion.button
              className={styles.logoutButton}
              onClick={logOutHandle}
              variants={exitButtonVariants}
              initial="hidden"
              animate="visible"
              whileTap="whileTap"
            >
              Выйти
            </motion.button>
          </div>
        </div>
        <motion.div
          className={styles.tabsWrapper}
          variants={tabsVariants}
          initial="hidden"
          animate="visible"
        >
          <Tabs />
        </motion.div>
      </main>
    </div>
  );
};

export default Profile;
