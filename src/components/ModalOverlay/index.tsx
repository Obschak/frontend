import { MouseEventHandler } from 'react';

import styles from './styles.module.scss';

interface Props {
  closeModal: MouseEventHandler<HTMLDivElement>;
}

export default function ModalOverlay({ closeModal }: Props) {
  return <div className={styles.modalOverlay} onClick={closeModal}></div>;
}
