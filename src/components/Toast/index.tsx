import * as ToastRadix from '@radix-ui/react-toast';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface Props {
  message: string;
  openToast: boolean;
  setOpenToast: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toast = ({
  message,
  openToast,
  setOpenToast,
}: ToastProps): JSX.Element => (
  <ToastRadix.Provider swipeDirection="down" duration={2000}>
    <ToastRadix.Root
      className={styles.ToastRoot}
      open={openToast}
      onOpenChange={setOpenToast}
    >
      <ToastRadix.Title className={styles.ToastTitle}>
        {message}
      </ToastRadix.Title>
      <ToastRadix.Close
        className={clsx(styles.Button, styles.small, styles.green)}
        aria-label="Close"
      >
        <span aria-hidden>×</span>
      </ToastRadix.Close>
    </ToastRadix.Root>

    <ToastRadix.Viewport className={styles.ToastViewport} />
  </ToastRadix.Provider>
);

export default Toast;
