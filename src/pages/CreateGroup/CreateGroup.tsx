import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../store/hooks';
import { createGroup } from './createGroupSlice';

import styles from './styles.module.scss';

const CreateGroup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim()) {
      dispatch(createGroup(inputValue));
      navigate('/');
    }
  };
  return (
    <div className={styles.createGroup}>
      <h1 className={styles.heading}>Создать общак</h1>
      <form className={styles.formWrapper}>
        <label className={styles.labelName} htmlFor="name">
          Название
        </label>
        <input
          type="text"
          id="name"
          name="groupName"
          className={styles.input}
          onChange={handleInputChange}
          value={inputValue}
        />
      </form>
      <button className={styles.createButton} onClick={handleClick}>
        Создать
      </button>
    </div>
  );
};

export default CreateGroup;
