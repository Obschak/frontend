import Avatar from '../../components/Avatar/Avatar';

import styles from './main.module.css';

import { PlusIcon } from '@radix-ui/react-icons';

const MainPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.topWrapper}>
        <h1 className={styles.heading}>Общаки</h1>
        <button className={styles.profileButton}>
          <Avatar avatarSize={60} />
        </button>
      </div>
      <button className={styles.createButton}>
        <div>
          <PlusIcon width="80" height="80" />
          <p>Создать общак</p>
        </div>
      </button>
    </div>
  );
};

export default MainPage;
