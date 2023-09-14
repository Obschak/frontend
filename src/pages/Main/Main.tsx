import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from '@radix-ui/react-icons';

import Avatar from '../../components/Avatar';
import Toast from '../../components/Toast';
import { useAppSelector } from '../../store/hooks';

import styles from './styles.module.scss';

const MainPage = () => {
  const [openToast, setOpenToast] = useState(false);
  const timerRef = useRef(0);
  const { picture } = useAppSelector(({ auth }) => auth);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

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
      <Link to="/create-group" className={styles.createButton}>
        <PlusIcon width="80" height="80" />
        <p>Создать общак</p>
      </Link>
      <button
        onClick={() => {
          setOpenToast(false);
          timerRef.current = window.setTimeout(() => {
            setOpenToast(true);
          }, 100);
        }}
      >
        Show toast
      </button>
      <Toast
        message={'Ссылка скопирована в буфер обмена!'}
        openToast={openToast}
        setOpenToast={setOpenToast}
      />
    </div>
  );
};

export default MainPage;
