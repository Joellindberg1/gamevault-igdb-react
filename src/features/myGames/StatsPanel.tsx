import styles from './MyGames.module.scss';

export default function StatsPanel() {
  return (
    <aside className={styles.statsPanel}>
      <h2 className={styles.statsTitle}>Nerd data</h2>
      <ul className={styles.statsList}>
        <li><strong># of games:</strong> 14</li>
        <li><strong># of genres:</strong> 9450</li>
        <li><strong>Top genre:</strong> Moba</li>
        <li><strong>Most common platform:</strong> LoL</li>
        <li><strong>Games finished:</strong> 7</li>
        <li><strong>Newest favorite:</strong> 3500</li>
        <li><strong>Oldest favorite:</strong> 1 year and 4 weeks</li>
      </ul>
    </aside>
  );
}
