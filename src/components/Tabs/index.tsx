import * as TabsRadix from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';
import clsx from 'clsx';
import { inputWrapperVariants, saveButtonVariants } from '../../variants';

export const Tabs = () => (
  <TabsRadix.Root className={styles.tabsRoot} defaultValue="tab1">
    <TabsRadix.List
      className={styles.tabsList}
      aria-label="Manage your account"
    >
      <TabsRadix.Trigger className={styles.tabsTrigger} value="tab1">
        СБП
      </TabsRadix.Trigger>
      <TabsRadix.Trigger className={styles.tabsTrigger} value="tab2">
        По карте
      </TabsRadix.Trigger>
    </TabsRadix.List>
    <TabsRadix.Content className={styles.tabsContent} value="tab1">
      <motion.div
        variants={inputWrapperVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.fieldset className={styles.fieldset}>
          <label className={styles.label} htmlFor="tel">
            Номер телефона
          </label>
          <motion.input
            className={styles.input}
            id="tel"
            type="tel"
            defaultValue=""
          />
        </motion.fieldset>
        <fieldset className={styles.fieldset}>
          <label className={styles.label} htmlFor="bank">
            Банк
          </label>
          <input
            className={styles.input}
            id="bank"
            type="string"
            defaultValue=""
          />
        </fieldset>
      </motion.div>
      <div className={styles.buttonWrapper}>
        <motion.button
          className={clsx(styles.button, styles.green)}
          variants={saveButtonVariants}
          initial="hidden"
          animate="visible"
          whileTap="whileTap"
        >
          Сохранить
        </motion.button>
      </div>
    </TabsRadix.Content>
    <TabsRadix.Content className={styles.tabsContent} value="tab2">
      <motion.div
        variants={inputWrapperVariants}
        initial="hidden"
        animate="visible"
      >
        <fieldset className={styles.fieldset}>
          <label className={styles.label} htmlFor="cardNumber">
            Номер карты
          </label>
          <input className={styles.input} id="cardNumber" type="text" />
        </fieldset>
      </motion.div>
      <div className={styles.buttonWrapper}>
        <motion.button
          className={clsx(styles.button, styles.green)}
          variants={saveButtonVariants}
          initial="hidden"
          animate="visible"
          whileTap="whileTap"
        >
          Сохранить
        </motion.button>
      </div>
    </TabsRadix.Content>
  </TabsRadix.Root>
);
