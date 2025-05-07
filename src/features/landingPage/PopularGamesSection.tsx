import { useEffect, useState } from 'react';


import styles from './LandingPage.module.scss';
import { GameCard } from '../../components/GameCard/GameCard.Types';
import { fetchFromIGDB } from '../../api/igdbService';
import { popularGamesQuery } from '../../api/queries/mostPopularGamesQuery';
import GameCardBase from '../../components/GameCard/GameCardBase';

export default function PopularGamesSection() {
  const [games, setGames] = useState<GameCard[]>([]);

  useEffect(() => {
    async function loadGames() {
      try {
        const data = await fetchFromIGDB(popularGamesQuery);
        setGames(data);
        console.log(data);
      } catch (err) {
        console.error('Error fetching popular games:', err);
      }
    }

    loadGames();
  }, []);
  console.log('games:', games);

  return (
    <section className={styles.sectionRight}>
      <h2 className={styles.sectionTitle}>Popular games</h2>
      <div className={styles.cardGrid}>
        {games.map((game) => (
          <GameCardBase key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
