import styles from './styles.module.scss';

const Events = (): JSX.Element => {
  return (
    <div className={styles.events}>
      <div className={styles.eventsWrapper}>
        <div className={styles.topWrapper}>
          <h3 className={styles.groupTitle}>Общак 1</h3>
        </div>
        <div className={styles.content}>
          <h4 className={styles.title}>История событий</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>CFC</li>
            <li className={styles.listItem}>Кальян</li>
            <li className={styles.listItem}>Кинотеатр</li>
            <li className={styles.listItem}>Шавуха</li>
            <li className={styles.listItem}>Тархун</li>
            <li className={styles.listItem}>Сухарики</li>
            <li className={styles.listItem}>Косичка</li>
            <li className={styles.listItem}>Крымские радости</li>
            <li className={styles.listItem}>Турецкие гадости</li>
            <li className={styles.listItem}>Петушествие</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Events;
