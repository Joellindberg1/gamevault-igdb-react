import { useState } from 'react';
import styles from './Header.module.scss';

export default function SearchToggle() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.searchWrapper}>
      <button
        className={styles.searchButton}
        onClick={() => setExpanded(!expanded)}
        aria-label="Toggle search"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <input
        type="text"
        placeholder="Search..."
        className={`${styles.searchInput} ${expanded ? styles.expanded : ''}`}
      />
    </div>
  );
}
