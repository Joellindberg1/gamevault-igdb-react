import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { GameCardData } from './GameCard.Types';
import { useMyGames } from '../../contexts/GameContext';

interface Props {
  game: GameCardData;
}

export default function FavoriteAddon({ game }: Props) {
  const { toggleFavorite, isFavorite } = useMyGames();
  const favorite = isFavorite(game.id);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite(game);
      }}
      className={!favorite ? 'not-favorited' : ''}
      aria-label={`Toggle favorite for ${game.name}`}
    >
      <FontAwesomeIcon icon={favorite ? solidHeart : regularHeart} className={!favorite ? 'not-favorited' : ''} />
    </button>
  );
}
