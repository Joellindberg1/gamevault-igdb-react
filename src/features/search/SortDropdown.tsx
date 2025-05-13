interface Props {
  sortBy: 'newest' | 'oldest' | 'rating';
  setSortBy: (value: 'newest' | 'oldest' | 'rating') => void;
}

export default function SortDropdown({ sortBy, setSortBy }: Props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <label htmlFor="sort">Sort by:</label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'rating')}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}
