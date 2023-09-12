import { Link } from 'react-router-dom';

import { Tabs } from '../../components/Tabs';
import Avatar from './../../components/Avatar';
import { useThemeContext } from '../../context/Theme';

import sunLogo from '../../assets/images/sun.svg';
import moonLogo from '../../assets/images/moon.svg';

import styles from './styles.module.scss';

const Profile = () => {
  const { toggleTheme, theme } = useThemeContext();
  const themeLogo = theme === 'light' ? moonLogo : sunLogo;
  return (
    <div className={styles.profile}>
      <main className={styles.main}>
        <div className={styles.topWrapper}>
          <h1>Мой профиль</h1>
          <button className={styles.themeButton} onClick={toggleTheme}>
            <img src={themeLogo} alt="themeLogo" width="40px" height="40px" />
          </button>
        </div>
        <div className={styles.topWrapper}>
          <Avatar size={'large'} />
          <Link to="/auth">
            <div className={styles.profileButton}>
              <h2 className={styles.userName}>Бекиров Шабут</h2>
            </div>
          </Link>
        </div>
        <div className={styles.tabsWrapper}>
          <Tabs />
        </div>
      </main>
    </div>
  );
};

export default Profile;
