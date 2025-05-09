import styles from './GameCard.module.scss';

import { faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMyGames } from '../../contexts/GameContext';

interface Props {
  game: {
    id: number;
    name: string;
    image: string;
  };
}

export default function FavoriteGameCard({ game }: Props) {
  const { toggleFavorite } = useMyGames();

  return (
    <div className={styles.card}>
      <img src={game.image} alt={game.name} className={styles.image} />
      <div className={styles.info}>
        <h3>{game.name}</h3>
        <button
          className={styles.unfavoriteButton}
          onClick={() => toggleFavorite(game)}
          aria-label={`Remove ${game.name} from favorites`}
        >
          <FontAwesomeIcon icon={faHeartCircleXmark} />
        </button>
      </div>
    </div>
  );
}
