import styles from './MyGames.module.scss';

interface Props {
  activeTab: 'mygames' | 'favorites';
  onTabChange: (tab: 'mygames' | 'favorites') => void;
}

console.log("render tab");
export default function TabSwitcher({ activeTab, onTabChange }: Props) {
  return (
    <div className={styles.tabSwitcher}>
      <button
        className={`${styles.tab} ${activeTab === 'mygames' ? styles.activeTab : ''}`}
        onClick={() => onTabChange('mygames')}
      >
        My Games
      </button>
      <button
        className={`${styles.tab} ${activeTab === 'favorites' ? styles.activeTab : ''}`}
        onClick={() => onTabChange('favorites')}
      >
        Favorites
      </button>
    </div>
  );
}
