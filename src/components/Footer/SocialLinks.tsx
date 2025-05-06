import styles from './Footer.module.scss';

export default function SocialLinks() {
  return (
    <div className={styles.social}>
      <h2 className={styles.title}>Connect</h2>
      <div className={styles.icons}>
        <a href="https://github.com/Joellindberg1" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/joel-lindberg2/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin" />
        </a>
        <a href="mailto:Joellindberg23@gmail.com">
          <i className="fa-solid fa-envelope" />
        </a>
      </div>
    </div>
  );
}
