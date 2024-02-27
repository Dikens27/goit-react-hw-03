import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.miniContainer}>
        <p className={css.text}>
          <FaUser />
          {name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
