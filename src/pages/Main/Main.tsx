import { Link } from 'react-router-dom';
import { PlusIcon } from '@radix-ui/react-icons';

import Avatar from '../../components/Avatar';

import styles from './styles.module.scss';
import { useAppSelector } from '../../store/hooks';

const MainPage = () => {
  const { picture } = useAppSelector(({ auth }) => auth);

  return (
    <div className={styles.main}>
      <div className={styles.topWrapper}>
        <h1 className={styles.heading}>Общаки</h1>
        <Link to="/profile">
          <div className={styles.profileButton}>
            <Avatar size={'medium'} image={picture} />
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
