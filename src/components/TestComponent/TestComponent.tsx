

import { useEffect, useState } from 'react';
import { fetchFromIGDB } from '../../api/igdbService';


interface Game {
  id: number;
  name: string;
  genres?: { id: number; name: string }[];
}

export const ExampleComponent = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGames = async () => {
      try {
        const data = await fetchFromIGDB('games', 'fields name,genres.name; limit 10;');
        console.log('IGDB data:', data); // Lägg till denna!
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setLoading(false);
      }
    };
  
    getGames();
  }, []);
  

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Games from IGDB</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.name} {game.genres ? `(${game.genres.map((g) => g.name).join(', ')})` : ''}
          </li>
        ))}
      </ul>
    </div>
  );
};
