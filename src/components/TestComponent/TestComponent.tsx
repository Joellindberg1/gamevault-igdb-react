

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
    const getGameById = async () => {
      try {
        const data = await fetchFromIGDB(
          'fields name,genres.name,summary; where id = 1020;'
        );        
        setGames(data); // IGDB returnerar alltid en array
      } catch (error) {
        console.error('Error fetching game by ID:', error);
      } finally {
        setLoading(false);
      }
    };
  
    getGameById();
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
