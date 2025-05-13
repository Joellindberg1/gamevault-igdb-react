import { createContext, useContext, useState, ReactNode } from 'react';
import { GameCardData } from '../components/GameCard/GameCard.Types';

type Game = GameCardData;

interface GameContextType {
  myGames: Game[];
  favorites: Game[];
  toggleFavorite: (game: Game) => void;
  addGame: (game: Game) => void;
  isFavorite: (id: number) => boolean;
  isOwned: (id: number) => boolean;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function MyGamesProvider({ children }: { children: ReactNode }) {
  const [myGames, setMyGames] = useState<Game[]>([]);
  const [favorites, setFavorites] = useState<Game[]>([]);

  const isOwned = (id: number) => myGames.some((g) => g.id === id);
  const isFavorite = (id: number) => favorites.some((g) => g.id === id);

  const addGame = (game: Game) => {
    setMyGames((prev) => [...prev, game]);
    setFavorites((prev) => prev.filter((g) => g.id !== game.id)); // remove from favorites
  };

  const toggleFavorite = (game: Game) => {
    if (isOwned(game.id)) return; // can't favorite owned games
    setFavorites((prev) =>
      isFavorite(game.id)
        ? prev.filter((g) => g.id !== game.id)
        : [...prev, game]
    );
  };

  return (
    <GameContext.Provider
      value={{ myGames, favorites, toggleFavorite, addGame, isFavorite, isOwned }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useMyGames() {
  const context = useContext(GameContext);
  if (!context) throw new Error('useMyGames must be used within MyGamesProvider');
  return context;
}
