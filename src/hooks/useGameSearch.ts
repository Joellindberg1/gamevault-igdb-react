import { useEffect, useState } from 'react';
import { buildSearchQuery } from '../api/queries/buildSearchQuery';
import { fetchAllGamesSortedQuery } from '../api/queries/fetchAllGamesSortedQuery';
import { fetchFromIGDB } from '../api/igdbService';


export function useGameSearch(searchTerm: string, sortBy: 'newest' | 'oldest' | 'rating', currentPage: number) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const runSearch = async () => {
      try {
        let query = '';

        if (searchTerm) {
          query = buildSearchQuery(searchTerm);
        } else {
          query = fetchAllGamesSortedQuery(sortBy, currentPage);
        }

        console.log('🧠 Query from useGameSearch:', query);

        const raw = await fetchFromIGDB(query);
        const clean = raw.filter((g: { name: string; cover: { url: string; }; }) => g.name && g.cover?.url);
        setResults(clean);
      } catch (err) {
        console.error('❌ useGameSearch API error:', err);
        setResults([]);
      }
    };

    runSearch();
  }, [searchTerm, sortBy, currentPage]);

  return results;
}
