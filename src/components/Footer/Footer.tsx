import styles from './Footer.module.scss';
import SocialLinks from './SocialLinks';
import logo from '@/assets/images/Logo.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.logoWrapper}>
            <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <SocialLinks />
    </footer>
  );
}
