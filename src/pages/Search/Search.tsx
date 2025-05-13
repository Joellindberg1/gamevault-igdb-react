import { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FilterSidebar from '../../features/search/FilterSidebar';
import SearchResultsGrid from '../../features/search/SearchResultsGrid';
import SortDropdown from '../../features/search/SortDropdown';
import Pagination from '../../features/search/Pagination';
import Input from '../../components/UI/Input/Input';
import styles from './Search.module.scss';
import BackgroundImage from '@/assets/images/Background 2.png';
import { useGameSearch } from '../../hooks/useGameSearch';

export default function SearchPage() {
  // Sökterm
  const [searchTerm, setSearchTerm] = useState('');

  // Filter
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedModes, setSelectedModes] = useState<string[]>([]);
  const [releaseYearRange, setReleaseYearRange] = useState<[number, number]>([1980, 2025]);

  // Sortering & sidhantering
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'rating'>('newest');
  const [currentPage, setCurrentPage] = useState(1);

  // Custom hook för Resultat
const searchResults = useGameSearch(searchTerm, sortBy, currentPage);


  return (
    <>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      />
      <div className={styles.pageWrapper}>
        <Header />
        <main className={styles.main}>
          <div className={styles.sidebar}>
            <FilterSidebar
              selectedGenres={selectedGenres}
              setSelectedGenres={setSelectedGenres}
              selectedPlatforms={selectedPlatforms}
              setSelectedPlatforms={setSelectedPlatforms}
              selectedModes={selectedModes}
              setSelectedModes={setSelectedModes}
              releaseYearRange={releaseYearRange}
              setReleaseYearRange={setReleaseYearRange}
            />
          </div>

          <div className={styles.resultsArea}>
            <div className={styles.controls}>
              <Input
                placeholder="Search games..."
                type="text"
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              />
              <SortDropdown
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>

            <SearchResultsGrid games={searchResults} />

            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
