export const mostFollowedGamesQuery = `
  fields name, cover.url, follows;
  sort follows desc;
  where cover != null & follows != null;
  limit 6;
`;
