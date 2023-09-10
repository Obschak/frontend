import * as TabsRadix from '@radix-ui/react-tabs';

import styles from './styles.module.scss';

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
      <fieldset className={styles.fieldset}>
        <label className={styles.label} htmlFor="tel">
          Номер телефона
        </label>
        <input
          className={styles.input}
          id="tel"
          type="number"
          defaultValue=""
        />
      </fieldset>
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
      <div
        style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}
      >
        <button className={`${styles.button} ${styles.green}`}>
          Сохранить
        </button>
      </div>
    </TabsRadix.Content>
    <TabsRadix.Content className={styles.tabsContent} value="tab2">
      <fieldset className={styles.fieldset}>
        <label className={styles.label} htmlFor="cardNumber">
          Номер карты
        </label>
        <input className={styles.input} id="cardNumber" type="number" />
      </fieldset>
      <div
        style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}
      >
        <button className={`${styles.button} ${styles.green}`}>
          Сохранить
        </button>
      </div>
    </TabsRadix.Content>
  </TabsRadix.Root>
);
