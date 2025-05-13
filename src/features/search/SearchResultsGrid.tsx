import styles from './Search.module.scss';
import { GameCardData } from '../../components/GameCard/GameCard.Types';
import FavoriteAddon from '../../components/GameCard/FavoriteAddon';
import GameCardBase from '../../components/GameCard/GameCardBase';
import CardWrapper from '../../components/GameCard/CardWrapper'; // 👈 Lägg till detta

interface Props {
  games: GameCardData[];
}

export default function SearchResultsGrid({ games }: Props) {
  if (games.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>No games found. Try searching or adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {games.map((game) => (
        <CardWrapper
          key={game.id}
          addon={
            !game.isOwned && (
              <FavoriteAddon
                game={game}
                isFavorite={game.favorite ?? false}
              />
            )
          }
        >
          <GameCardBase game={game} />
        </CardWrapper>
      ))}
    </div>
  );
}
