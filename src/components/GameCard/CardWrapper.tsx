import { ReactNode } from 'react';
import styles from './GameCard.module.scss';

interface Props {
  children: ReactNode; // GameCardBase
  addon?: ReactNode;   // Hjärtat, pennan, etc
  positionVariant?: 'default' | 'detail';
}

export default function CardWrapper({ children, addon, positionVariant = 'default' }: Props) {
  return (
    <div className={styles.cardWrapper}>
      {addon && (
        <div
          className={`${styles.addonTopRight} ${positionVariant === 'detail' ? styles['position-detail'] : styles['position-default']}`}
          onClick={(e) => e.stopPropagation()}
        >
          {addon}
        </div>
      )}
      {children}
    </div>
  );
}
