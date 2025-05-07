export const mostHypedGamesQuery = `
  fields name, cover.url, hypes;
  sort hypes desc;
  where cover != null & hypes != null;
  limit 6;
`;
