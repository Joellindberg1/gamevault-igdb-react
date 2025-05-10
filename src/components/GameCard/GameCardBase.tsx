import styles from './GameCard.module.scss';
import { GameCardBaseProps } from './GameCard.Types';

export default function GameCardBase({ game, children }: GameCardBaseProps) {
  const imageUrl = game.cover?.url.replace('t_thumb', 't_cover_big');

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={game.name} className={styles.image} />
      <div className={styles.info}>
        <h3>{game.name}</h3>
        {game.total_rating !== undefined && (
          <p>Rating: {Math.round(game.total_rating)}</p>
        )}
        {game.follows !== undefined && (
          <p>Follows: {game.follows}</p>
        )}
        {game.hypes !== undefined && (
          <p>Hype: {game.hypes}</p>
        )}
      </div>
      {/* Render children (addons) here */}
      {children}
    </div>
  );
}
