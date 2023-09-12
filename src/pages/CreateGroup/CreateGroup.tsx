import styles from './styles.module.scss';

const CreateGroup = () => {
  return (
    <div className={styles.createGroup}>
      <main className={styles.mainWrapper}>
        <h1 className={styles.heading}>Создать общак</h1>
        <label className={styles.labelName} htmlFor="name">
          Название
        </label>
        <input type="text" id="name" className={styles.input} />
      </main>
      <button className={styles.createButton}>Создать</button>
    </div>
  );
};

export default CreateGroup;
