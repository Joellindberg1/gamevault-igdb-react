import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.activeLink}` : styles.link
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.activeLink}` : styles.link
        }
      >
        Search
      </NavLink>
      <NavLink
        to="/mygames"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.activeLink}` : styles.link
        }
      >
        My Games
      </NavLink>
    </nav>
  );
}
