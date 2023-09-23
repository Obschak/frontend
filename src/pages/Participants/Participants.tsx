import Avatar from '../../components/Avatar';
import { CloseIcon } from '../../components/CloseIcon';

import styles from './styles.module.scss';

const Participants = (): JSX.Element => {
  return (
    <div className={styles.participants}>
      <div className={styles.participantsWrapper}>
        <div className={styles.topWrapper}>
          <h3 className={styles.groupTitle}>Общак 1</h3>
          <button className={styles.btn}>Пригласить</button>
        </div>
        <div className={styles.content}>
          <h4 className={styles.title}>Участники</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Avatar image="https://placehold.co/50x50" size="medium" />
              <span className={styles.participantName}>
                Ебало участника представили?
              </span>
              <button className={styles.removeBtn}>
                <CloseIcon />
              </button>
            </li>
            <li className={styles.listItem}>
              <Avatar image="https://placehold.co/50x50" size="medium" />
              <span className={styles.participantName}>Участник</span>
              <button className={styles.removeBtn}>
                <CloseIcon />
              </button>
            </li>
            <li className={styles.listItem}>
              <Avatar image="https://placehold.co/50x50" size="medium" />
              <span className={styles.participantName}>Участник</span>
              <button className={styles.removeBtn}>
                <CloseIcon />
              </button>
            </li>
            <li className={styles.listItem}>
              <Avatar image="https://placehold.co/50x50" size="medium" />
              <span className={styles.participantName}>Участник</span>
              <button className={styles.removeBtn}>
                <CloseIcon />
              </button>
            </li>
            <li className={styles.listItem}>
              <Avatar image="https://placehold.co/50x50" size="medium" />
              <span className={styles.participantName}>Участник</span>
              <button className={styles.removeBtn}>
                <CloseIcon />
              </button>
            </li>
            <li className={styles.listItem}>
              <Avatar image="https://placehold.co/50x50" size="medium" />
              <span className={styles.participantName}>Участник</span>
              <button className={styles.removeBtn}>
                <CloseIcon />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Participants;
