import { useNavigate } from 'react-router-dom';

import Avatar from '../../components/Avatar';

import styles from './styles.module.scss';

const Group = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.group}>
      <div className={styles.groupWrappper}>
        <div className={styles.topWrapper}>
          <h3 className={styles.groupTitle}>Общак 1</h3>
          <button className={styles.btn}>Создать расход</button>
        </div>
        <div className={styles.content}>
          <div className={styles.balance}>
            <h4 className={styles.title}>Мой баланс:</h4>
            <span className={styles.balanceCount}>700 000 руб.</span>
          </div>
          <div className={styles.debtors}>
            <h2 className={styles.title}>Должники</h2>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Avatar image="https://placehold.co/50x50" size="small" />
                <span className={styles.name}>Debtor</span>
              </li>
              <li className={styles.item}>
                <Avatar image="https://placehold.co/50x50" size="small" />
                <span className={styles.name}>Debtor</span>
              </li>
              <li className={styles.item}>
                <Avatar image="https://placehold.co/50x50" size="small" />
                <span className={styles.name}>Debtor</span>
              </li>
              <li className={styles.item}>
                <Avatar image="https://placehold.co/50x50" size="small" />
                <span className={styles.name}>Debtor</span>
              </li>
            </ul>
          </div>
          <div className={styles.debt}>
            <h2 className={styles.title}>Кому должен</h2>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Avatar image="https://placehold.co/50x50" size="small" />
                <span className={styles.name}>Debtor</span>
              </li>
              <li className={styles.item}>
                <Avatar image="https://placehold.co/50x50" size="small" />
                <span className={styles.name}>Debtor</span>
              </li>
            </ul>
          </div>
          <div className={styles.expenses}>
            <h2 className={styles.title}>Расходы</h2>
            <ul className={styles.expensesList}>
              <li className={styles.expensesItem}>CFC</li>
              <li className={styles.expensesItem}>Кальян</li>
              <li className={styles.expensesItem}>Кинотеатр</li>
              <li className={styles.expensesItem}>Мороженное</li>
              <li className={styles.expensesItem}>Петушествие</li>
              <li className={styles.expensesItem}>Петушествие</li>
              <li className={styles.expensesItem}>Петушествие</li>
              <li className={styles.expensesItem}>Петушествие</li>
              <li className={styles.expensesItem}>Петушествие</li>
              <li className={styles.expensesItem}>Петушествие</li>
              <li className={styles.expensesItem}>Петушествие</li>
              <li className={styles.expensesItem}>Петушествие</li>
              <li className={styles.expensesItem}>Петушествие</li>
              <li className={styles.expensesItem}>Петушествие</li>
              <li className={styles.expensesItem}>Петушествие</li>
              <li className={styles.expensesItem}>Петушествие</li>
              <li className={styles.expensesItem}>Петушествие</li>
            </ul>
          </div>

          <div className={styles.buttons}>
            <button
              className={styles.btn}
              onClick={() => navigate('/participants')}
            >
              Участники
            </button>
            <button className={styles.btn} onClick={() => navigate('/events')}>
              История событий
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
