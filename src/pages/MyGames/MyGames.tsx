import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import StatsPanel from '../../features/MyGames/StatsPanel';
import TabSwitcher from '../../features/MyGames/TabSwitcher';
import MyGamesPanel from '../../features/MyGames/MyGamesPanel';
import FavoritesPanel from '../../features/FavoritesPanel/FavoritesPanel';
import styles from './MyGames.module.scss';
import backgroundImage from '@/assets/images/Background 4.png';




export default function MyGamesPage() {
  const [activeTab, setActiveTab] = useState<'mygames' | 'favorites'>('mygames');

  return (
    <>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className={styles.pageWrapper}>
        <Header />
        <main className={styles.main}>
          <StatsPanel />
          <div className={styles.contentArea}>
            <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />
            {activeTab === 'mygames' ? <MyGamesPanel /> : <FavoritesPanel />}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
