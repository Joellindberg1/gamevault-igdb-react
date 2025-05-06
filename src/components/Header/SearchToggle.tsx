import { useState } from 'react';
import styles from './Header.module.scss';

export default function SearchToggle() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.searchWrapper}>
      <button className={styles.searchButton} onClick={() => setExpanded(!expanded)}>
        🔍
      </button>
      {expanded && (
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search games..."
        />
      )}
    </div>
  );
}
