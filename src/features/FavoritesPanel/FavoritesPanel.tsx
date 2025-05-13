
import FavoriteAddon from '../../components/GameCard/FavoriteAddon';
import styles from './FavoritesPanel.module.scss';

export default function FavoritesPanel() {
  const favoriteGames = [
    { id: 7, name: 'Slay the Spire', image: '/images/dummy7.jpg' },
    { id: 8, name: 'Hollow Knight', image: '/images/dummy8.jpg' },
    { id: 9, name: 'The Witcher 3', image: '/images/dummy9.jpg' },
  ];

  return (
    <div className={styles.favoritesGrid}>
      {favoriteGames.map((game) => (
        <FavoriteAddon
          game={game}
          isFavorite={game.favorite ?? false}
        />
      ))}
    </div>
  );
}
