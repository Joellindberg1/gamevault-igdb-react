export function fetchAllGamesSortedQuery(
  sortBy: 'newest' | 'oldest' | 'rating',
  page: number
): string {
  let sortClause = '';
  let whereClause = 'where name != null & cover != null';

  if (sortBy === 'newest') {
    sortClause = 'sort first_release_date desc;';
    whereClause += ' & first_release_date != null';
  } else if (sortBy === 'oldest') {
    sortClause = 'sort first_release_date asc;';
    whereClause += ' & first_release_date != null';
  } else if (sortBy === 'rating') {
    sortClause = 'sort total_rating desc;';
    whereClause += ' & total_rating != null';
  }

  const limit = 50;
  const offset = (page - 1) * limit;

  return `
    fields name, cover.url, total_rating, first_release_date;
    ${whereClause};
    ${sortClause}
    limit ${limit};
    offset ${offset};
  `;
}
