export function fetchHandpickedGamesQuery(): string {
return `
  fields name, cover.url;
  where id = (1942, 7346, 1020);
  limit 3;
`;

}
