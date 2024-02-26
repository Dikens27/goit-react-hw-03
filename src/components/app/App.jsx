// import css from './App.module.css';
import { useState, useEffect } from 'react';
import ContactForm from '../contactForm/ContactForm';
import SearchBar from '../searchBox/SearchBar';
import ContactList from '../contactList/ContactList';
import initialContacts from '../../contacts.json';

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem('saved-contacts');
  return savedContacts !== '[]' ? JSON.parse(savedContacts) : initialContacts;
};

export default function App() {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    setContacts(prevContscts => {
      return [...prevContscts, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContscts => {
      return prevContscts.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBar value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
