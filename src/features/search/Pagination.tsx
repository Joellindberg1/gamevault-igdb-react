interface Props {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export default function Pagination({ currentPage, setCurrentPage }: Props) {
  const goToPrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
      <button onClick={goToPrevious} disabled={currentPage === 1}>
        ← Previous
      </button>
      <span>Page {currentPage}</span>
      <button onClick={goToNext}>
        Next →
      </button>
    </div>
  );
}
