// src/api/queries/popularGamesQuery.ts
export const popularGamesQuery = `
  fields name, cover.url, total_rating, rating_count;
  sort total_rating desc;
  where cover != null & total_rating != null;
  limit 6;
`;
