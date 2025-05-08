import EditableGameCard from '../../components/GameCard/EditableGameCard';
import styles from './MyGames.module.scss';

export default function MyGamesPanel() {
  const dummyGames = [
    { id: 1, name: 'Elden Ring', image: '/images/dummy1.jpg' },
    { id: 2, name: 'Valorant', image: '/images/dummy2.jpg' },
    { id: 3, name: 'Hades', image: '/images/dummy3.jpg' },
    { id: 4, name: 'Portal 2', image: '/images/dummy4.jpg' },
    { id: 5, name: 'Stardew Valley', image: '/images/dummy5.jpg' },
    { id: 6, name: 'Zelda: TotK', image: '/images/dummy6.jpg' },
    { id: 7, name: 'Elden Ring', image: '/images/dummy1.jpg' },
    { id: 8, name: 'Valorant', image: '/images/dummy2.jpg' },
    { id: 9, name: 'Hades', image: '/images/dummy3.jpg' },
    { id: 10, name: 'Portal 2', image: '/images/dummy4.jpg' },
    { id: 11, name: 'Stardew Valley', image: '/images/dummy5.jpg' },
    { id: 12, name: 'Zelda: TotK', image: '/images/dummy6.jpg' }
  ];

  return (
    <div className={styles.gameGrid}>
      {dummyGames.map((game) => (
        <EditableGameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
