import styles from './GameCard.module.scss';
import { GameCardBaseProps } from './GameCard.Types';
import { useNavigate } from 'react-router-dom';

export default function GameCardBase({ game, children }: GameCardBaseProps) {
  const imageUrl = game.cover?.url.replace('t_thumb', 't_cover_big');
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/game/${game.id}`);
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <img src={imageUrl} alt={game.name} className={styles.image} />
      <div className={styles.info}>
        <h3>{game.name}</h3>
        {game.total_rating !== undefined && (
          <p>Rating: {Math.round(game.total_rating)}</p>
        )}
        {game.follows !== undefined && <p>Follows: {game.follows}</p>}
        {game.hypes !== undefined && <p>Hype: {game.hypes}</p>}
      </div>

      {/* 💡 Addons måste själva stoppa klick från att bubbla upp */}
      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
