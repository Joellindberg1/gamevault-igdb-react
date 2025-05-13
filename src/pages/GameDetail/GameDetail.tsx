import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './GameDetail.module.scss';
import { useMyGames } from '../../contexts/GameContext';
import { fetchFromIGDB } from '../../api/igdbService';
import CardWrapper from '../../components/GameCard/CardWrapper';
import FavoriteAddon from '../../components/GameCard/FavoriteAddon';
import { GameCardData } from '../../components/GameCard/GameCard.Types';
import backgroundImage from '@/assets/images/Background 4.png';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function GameDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState<GameCardData | null>(null);
  const { toggleFavorite, addGame } = useMyGames();

  useEffect(() => {
    const loadGame = async () => {
      const query = `
        fields name, summary, cover.url, total_rating, rating_count, follows, hypes, first_release_date, genres.name, platforms.name;
        where id = ${id};
      `;
      const result = await fetchFromIGDB(query);
      setGame(result[0]);
    };

    loadGame();
  }, [id]);

  if (!game) return <p>Loading game...</p>;

  const imageUrl = game.cover?.url.replace('t_thumb', 't_cover_big');

  return (
    <>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <Header />
      <div className={styles.detailPage}>
        <div className={styles.content}>
          {/* BACK BUTTON */}
          <div
            className={styles.backButtonWrapper}
            onClick={() => navigate(-1)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'mouseClick' || e.key === ' ') navigate(-1);
            }}
          >
            ← Back to my games
          </div>

          {/* IMAGE */}
          <div className={styles.imageSection}>
            <CardWrapper
              addon={
                <FavoriteAddon game={game} isFavorite={game.favorite ?? false} />
              }
              positionVariant='detail'
            >
              <img src={imageUrl} alt={game.name} className={styles.cover} />
            </CardWrapper>
          </div>

          {/* DESCRIPTION */}
          <div className={styles.descriptionSection}>
            <h1 className={styles.title}>{game.name}</h1>
            <p>{game.summary || 'No description available.'}</p>
            <div className={styles.tags}>
              {game.genres?.map((genre) => (
                <span key={genre.name} className={styles.tag}>
                  {genre.name}
                </span>
              ))}
              {game.platforms?.map((platform) => (
                <span key={platform.name} className={styles.tag}>
                  {platform.name}
                </span>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className={styles.statsSection}>
            <h2>Game stats</h2>
            <p><strong>Global rank:</strong> {game.rating_count ?? '-'}</p>
            <p><strong>Genre rank:</strong> {game.genres?.length ?? '-'}</p>
            <p><strong>Release year:</strong> {game.first_release_date
              ? new Date(game.first_release_date * 1000).getFullYear()
              : '-'}</p>
            <button
              className={styles.addGameButton}
              onClick={() => addGame(game)}
            >
              Add game
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

