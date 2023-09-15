import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useNavigate } from 'react-router-dom';

import { clearFormData, createGroup, getInputValue } from './createGroupSlice';

import styles from './styles.module.scss';

const CreateGroup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useAppSelector((state) => state.createGroup.formData);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(getInputValue({ fieldName: name, value }));
  };

  const handleClick = () => {
    if (form.groupName) {
      dispatch(createGroup(form.groupName));
      navigate('/');
      dispatch(clearFormData());
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
          value={form.groupName}
        />
      </form>
      <button className={styles.createButton} onClick={handleClick}>
        Создать
      </button>
    </div>
  );
};

export default CreateGroup;
