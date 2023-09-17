import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

type SetShowOverlayFunction = React.Dispatch<React.SetStateAction<boolean>>;

interface Props {
  setShowOverlay: SetShowOverlayFunction;
}

export const InitialOverlay = ({ setShowOverlay }: Props) => {
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  return (
    <motion.div
      className={styles.overlayWrapper}
      initial={initialLoad ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 1,
        delay: 1,
        onComplete: () => setShowOverlay(false),
      }}
    >
      <h1 className={styles.heading}>ОБЩАК</h1>
    </motion.div>
  );
};
