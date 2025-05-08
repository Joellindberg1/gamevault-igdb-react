
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import StatsPanel from '../../features/MyGames/StatsPanel';
import styles from './MyGames.module.scss';
import backgroundImage from '@/assets/images/Background 4.png'; // byt till korrekt namn

export default function MyGamesPage() {
  return (
    <>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className={styles.pageWrapper}>
        <Header />
        <main className={styles.main}>
          {/* Här kommer StatsPanel och resten av innehållet sen */}
          <StatsPanel />
        </main>
        <Footer />
      </div>
    </>
  );
}
