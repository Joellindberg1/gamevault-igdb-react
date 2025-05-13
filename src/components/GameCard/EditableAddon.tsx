import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

interface Props {
  onEditClick: () => void;
}

export default function EditableAddon({ onEditClick }: Props) {
  return (
    <button onClick={(e) => {
      e.stopPropagation(); // 👈 Hindrar navigation
      onEditClick();
    }}>
      <FontAwesomeIcon icon={faPen} />
    </button>
  );
}
