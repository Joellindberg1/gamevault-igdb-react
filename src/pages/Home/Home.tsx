import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import bg1 from '@/assets/images/Background 1.png';
import bg2 from '@/assets/images/Background 2.png';
import bg3 from '@/assets/images/Background 3.png';
import styles from './Home.module.scss';
// import { ExampleComponent } from '../../components/TestComponent/TestComponent';
import PopularGamesSection from '../../features/landingPage/PopularGamesSection';
import HeroSection from '../../features/landingPage/HeroSection';
import SectionWrapper from '../../features/landingPage/SectionWrapper';

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
          <SectionWrapper align="left">
            <HeroSection />
          </SectionWrapper>
          <SectionWrapper align="right" className={styles.sectionOverlap1}>
            <div style={{ marginTop: "-15rem", marginRight: "5rem"}}>
              <PopularGamesSection />
            </div>
          </SectionWrapper>
          <SectionWrapper align="left" className={styles.sectionOverlap2}>
            <div style={{ marginTop: "-25rem", marginLeft: "5rem"}}>
              <PopularGamesSection />
            </div>
          </SectionWrapper>
          <SectionWrapper align="right"className={styles.sectionOverlap2}>
            <div style={{ marginTop: "-25rem", marginRight: "5rem"}}>
              <PopularGamesSection />
            </div>
          </SectionWrapper>
          <SectionWrapper align="left"className={styles.sectionOverlap2}>
            <div style={{ marginTop: "-25rem", marginLeft: "5rem"}}>
              <PopularGamesSection />
            </div>
          </SectionWrapper>
        </main>
        <Footer />
      </div>
    </>
  );
}
