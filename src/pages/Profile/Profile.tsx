import { Link } from 'react-router-dom';

import { Tabs } from '../../components/Tabs';
import Avatar from './../../components/Avatar';

import styles from './styles.module.scss';

const Profile = () => {
  return (
    <div className={styles.profile}>
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
    </div>
  );
};

export default Profile;
