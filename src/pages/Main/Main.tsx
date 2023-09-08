import { Link } from 'react-router-dom';
import { PlusIcon } from '@radix-ui/react-icons';

import Avatar from '../../components/Avatar';

import styles from './styles.module.scss';

const MainPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.topWrapper}>
        <h1 className={styles.heading}>Общаки</h1>
        <Link to="/profile">
          <div className={styles.profileButton}>
            <Avatar size={'medium'} />
          </div>
        </Link>
      </div>
      <div className={styles.createButton}>
        <PlusIcon width="80" height="80" />
        <p>Создать общак</p>
      </div>
    </div>
  );
};

export default MainPage;
