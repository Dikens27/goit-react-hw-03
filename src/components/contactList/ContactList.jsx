import css from './ContactList.module.css';
import Contact from '../contact/Contact';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
