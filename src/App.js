import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import SearchContacts from './components/SearchContacts/SearchContacts';
import shortid from 'shortid';

const App = () => {
  const [stateContacts, setStateContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? '',
  );
  const [stateFilter, setStateFilter] = useState('');

  // Записує конткти в Local Storage з stateContacts при їх оновленні
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(stateContacts));
  }, [stateContacts]);

  //Записує в stateContacts дані з форми ContactForm
  //прокидується як prop в ContactForm
  const formSubmitHandler = data => {
    data.id = shortid.generate();
    setStateContacts(prevState => [...prevState, data]);
  };

  //Записує дані з фільтру в stateFilter
  const changeFilter = e => {
    setStateFilter(() => e.target.value);
  };

  //Повертає відфільтровані контакти (пошук)
  const getFilteredContacts = () => {
    if (stateContacts) {
      const normalizedFilter = stateFilter.toLowerCase();
      return stateContacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
    }
  };

  const deleteContact = contactId => {
    const filteredContacts = stateContacts.filter(
      contact => contact.id !== contactId,
    );
    setStateContacts(filteredContacts);
  };

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={formSubmitHandler} contacts={stateContacts} />
      <h2>Contacts</h2>
      <SearchContacts value={stateFilter} onChange={changeFilter} />
      {stateContacts && (
        <ContactsList
          contacts={getFilteredContacts()}
          onDelete={deleteContact}
        ></ContactsList>
      )}
    </>
  );
};

export default App;
