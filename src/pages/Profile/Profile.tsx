import { Link } from 'react-router-dom';

import { Tabs } from '../../components/Tabs';
import Avatar from './../../components/Avatar';

import styles from './styles.module.scss';
import { useThemeContext } from '../../context/Theme';

const Profile = () => {
  const { toggleTheme } = useThemeContext();
  return (
    <div className={styles.profile}>
      <main className={styles.main}>
        <h1>Мой профиль</h1>
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
      <button className={styles.themeButton} onClick={toggleTheme}>
        Поменять тему
      </button>
    </div>
  );
};

export default Profile;
