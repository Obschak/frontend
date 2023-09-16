import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from '@radix-ui/react-icons';

import Avatar from '../../components/Avatar';
import Toast from '../../components/Toast';
import { useAppSelector } from '../../store/hooks';

import styles from './styles.module.scss';

const MainPage = () => {
  const groups = useAppSelector((state) => state.createGroup.groups);
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
      {groups.length === 0 && (
        <Link to="/create-group" className={styles.createFirstGoup}>
          <PlusIcon width="80" height="80" />
          <p>Создать общак</p>
        </Link>
      )}
      {groups.length > 0 && (
        <div className={styles.mainWrapper}>
          <ul className={styles.groupWrapper}>
            {groups.map((group, index) => (
              <li className={styles.groupList} key={index}>
                {group}
              </li>
            ))}
          </ul>
          {/* <button
        onClick={() => {
          setOpenToast(false);
          timerRef.current = window.setTimeout(() => {
            setOpenToast(true);
          }, 100);
        }}
      >
        Show toast
      </button> */}
          <Link to="/create-group">
            <p className={styles.createButton}>Создать</p>
          </Link>
        </div>
      )}
      <Toast
        message={'Ссылка скопирована в буфер обмена!'}
        openToast={openToast}
        setOpenToast={setOpenToast}
      />
    </div>
  );
};

export default MainPage;
