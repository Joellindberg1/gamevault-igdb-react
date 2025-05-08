import { useNavigate } from 'react-router-dom';
import styles from './GameCard.module.scss';

interface Props {
  game: {
    id: number;
    name: string;
    image: string;
  };
}

export default function EditableGameCard({ game }: Props) {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <img src={game.image} alt={game.name} className={styles.image} />
      <div className={styles.info}>
        <h3>{game.name}</h3>
        <button
          className={styles.editButton}
          onClick={() => navigate(`/editgame/${game.id}`)}
          aria-label={`Edit ${game.name}`}
        >
          <i className="fa-solid fa-pen"></i>
        </button>
      </div>
    </div>
  );
}
