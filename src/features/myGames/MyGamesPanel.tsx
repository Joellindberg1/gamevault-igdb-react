import EditableAddon from '../../components/GameCard/EditableAddon';
import GameCardBase from '../../components/GameCard/GameCardBase';
import styles from './MyGames.module.scss';
import { useNavigate } from 'react-router-dom';

export default function MyGamesPanel() {
  const navigate = useNavigate();

  // Dummy-spel
  const dummyGames = [
    { id: 1, name: 'Elden Ring', cover: { url: '/images/dummy1.jpg' } },
    { id: 2, name: 'Valorant', cover: { url: '/images/dummy2.jpg' } },
    { id: 3, name: 'Hades', cover: { url: '/images/dummy3.jpg' } },
    { id: 4, name: 'Portal 2', cover: { url: '/images/dummy4.jpg' } },
    { id: 5, name: 'Stardew Valley', cover: { url: '/images/dummy5.jpg' } },
    { id: 6, name: 'Zelda: TotK', cover: { url: '/images/dummy6.jpg' } },
    { id: 7, name: 'Cyberpunk 2077', cover: { url: '/images/dummy1.jpg' } },
    { id: 8, name: 'Overwatch 2', cover: { url: '/images/dummy2.jpg' } },
    { id: 9, name: 'Dead Cells', cover: { url: '/images/dummy3.jpg' } },
    { id: 10, name: 'Dark Souls 3', cover: { url: '/images/dummy4.jpg' } },
    { id: 11, name: 'It Takes Two', cover: { url: '/images/dummy5.jpg' } },
    { id: 12, name: 'Returnal', cover: { url: '/images/dummy6.jpg' } },
  ];

  return (
    <div className={styles.gameGrid}>
      {dummyGames.map((game) => (
        <GameCardBase key={game.id} game={{ ...game, isOwned: true, category: 'owned' }}>
          <EditableAddon onEditClick={() => navigate(`/editgame/${game.id}`)} />
        </GameCardBase>
      ))}
    </div>
  );
}
