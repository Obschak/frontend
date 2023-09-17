import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';

import Avatar from '../../components/Avatar';
import Toast from '../../components/Toast';
import { useAppSelector } from '../../store/hooks';
import {
  generateGroupListVariants,
  headingVariants,
  createFirstGroupVariants,
  avatarVariants,
  createButtonVariants,
} from '../../variants';

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
        <motion.h1
          className={styles.heading}
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Общаки
        </motion.h1>
        <Link to="/profile">
          <motion.div
            className={styles.profileButton}
            variants={avatarVariants}
            initial="hidden"
            animate="visible"
            whileTap="whileTap"
          >
            <Avatar size={'medium'} image={picture} />
          </motion.div>
        </Link>
      </div>
      {groups.length === 0 && (
        <Link to="/create-group" className={styles.createWrapper}>
          <motion.div
            className={styles.createFirstGroup}
            variants={createFirstGroupVariants}
            initial="hidden"
            animate="visible"
            whileTap="whileTap"
          >
            <PlusIcon width="80" height="80" />
            <p>Создать общак</p>
          </motion.div>
        </Link>
      )}
      {groups.length > 0 && (
        <div className={styles.mainWrapper}>
          <ul className={styles.groupWrapper}>
            {groups.map((group, i) => (
              <motion.li
                className={styles.groupList}
                key={i}
                variants={generateGroupListVariants(i)}
                initial="hidden"
                animate="visible"
              >
                {group}
              </motion.li>
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
            <motion.p
              className={styles.createButton}
              variants={createButtonVariants}
              initial="hidden"
              animate="visible"
              whileTap="whileTap"
            >
              Создать
            </motion.p>
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
