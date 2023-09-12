import ReactDOM from 'react-dom';
import { useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cross1Icon } from '@radix-ui/react-icons';

import ModalOverlay from '../ModalOverlay';

import styles from './styles.module.scss';

const modalRootElement = document.querySelector('#react-modals')!;

interface Props {
  children: ReactNode;
  closePath?: string;
}

export default function Modal({ children, closePath }: Props) {
  const navigate = useNavigate();
  function closeModals(path: string) {
    navigate(path);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape' && closePath) {
      closeModals(closePath);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.active}>
      <ModalOverlay closeModal={() => closePath && closeModals(closePath)} />
      <div className={styles.modalBody}>
        <button
          className={styles.closeButton}
          onClick={() => closePath && closeModals(closePath)}
        >
          <Cross1Icon width="24px" height="24px" />
        </button>
        {children}
      </div>
    </div>,
    modalRootElement,
  );
}
