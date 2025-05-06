import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>Home</NavLink>
      <NavLink to="/search" className={styles.link}>Search</NavLink>
      <NavLink to="/mygames" className={styles.link}>My Games</NavLink>
    </nav>
  );
}
