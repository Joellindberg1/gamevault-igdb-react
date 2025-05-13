export function buildSearchQuery(searchTerm: string): string {
  return `
    search "${searchTerm}";
    fields name, cover.url, total_rating, follows, hypes, genres.name, platforms.name;
    where name != null & cover != null;
    limit 20;
  `;
}
