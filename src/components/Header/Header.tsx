import styles from './Header.module.scss';
import NavBar from './NavBar';
import SearchToggle from './SearchToggle';
import logo from '@/assets/images/Logo.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <NavBar />
      <SearchToggle />
    </header>
  );
}
