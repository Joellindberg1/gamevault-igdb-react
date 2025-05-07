import styles from './LandingPage.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>Gamevault</h1>
      <p className={styles.heroText}>
        The #1 place to keep track of your games. Discover new games and see what's hot right now.
      </p>
      <p className={styles.heroText}>
        Browse the games in the search section by genres, multi/singleplayer, year or simply by popularity.
      </p>
      <p className={styles.heroText}>
        Save your games and favorites and keep track of your game time in the “My games” section.
      </p>
    </section>
  );
}
