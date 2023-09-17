import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useAppDispatch } from '../../store/hooks';
import { createGroup } from './createGroupSlice';
import {
  headingVariants,
  createButtonVariants,
  inputVariants,
} from '../../variants';

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
      <motion.h1
        className={styles.heading}
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        Создать общак
      </motion.h1>
      <form className={styles.formWrapper}>
        <motion.label
          className={styles.labelName}
          htmlFor="name"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Название
        </motion.label>
        <motion.input
          type="text"
          id="name"
          name="groupName"
          placeholder="Введите название..."
          className={styles.input}
          onChange={handleInputChange}
          value={inputValue}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        />
      </form>
      <motion.button
        className={styles.createButton}
        onClick={handleClick}
        variants={createButtonVariants}
        initial="hidden"
        animate="visible"
        whileTap="whileTap"
      >
        Создать
      </motion.button>
    </div>
  );
};

export default CreateGroup;
