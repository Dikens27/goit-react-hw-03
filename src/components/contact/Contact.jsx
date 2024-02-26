import css from './Contact.module.css';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.miniContainer}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
