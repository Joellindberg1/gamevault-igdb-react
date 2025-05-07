import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import bg1 from '@/assets/images/Background 1.png';
import bg2 from '@/assets/images/Background 2.png';
import bg3 from '@/assets/images/Background 3.png';
import styles from './Home.module.scss';
// import { ExampleComponent } from '../../components/TestComponent/TestComponent';
import PopularGamesSection from '../../features/landingPage/PopularGamesSection';
import HeroSection from '../../features/landingPage/HeroSection';

export default function Home() {
  return (
    <>
      {/* Bakgrundssektioner – ligger bakom allt */}
      <div className={styles.backgrounds}>
        <div
          className={`${styles.bgSection} ${styles.bg1}`}
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className={styles.overlaybg1}></div>
        </div>
        <div
          className={`${styles.bgSection} ${styles.bg2}`}
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className={styles.overlaybg2}></div>
        </div>
        <div
          className={`${styles.bgSection} ${styles.bg3}`}
          style={{ backgroundImage: `url(${bg3})` }}
        >
          <div className={styles.overlaybg3}></div>
        </div>
      </div>

      {/* Innehåll – ligger ovanpå */}
      <div className={styles.homeWrapper}>
        <Header />
        <main className={styles.main}>
          <HeroSection />
          <PopularGamesSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
