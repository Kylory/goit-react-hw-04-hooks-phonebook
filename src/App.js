import React, { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import SearchContacts from './components/SearchContacts/SearchContacts';
import shortid from 'shortid';
import { render } from '@testing-library/react';

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };
const App = () => {
  const [stateContacts, setStateContacts] = useState([]);
  const [stateFilter, setStateFilter] = useState('');

  // Записує конткти в state з Local Storage
  // componentDidMount() {
  //   const savedContacts = localStorage.getItem('contacts');

  //   if (savedContacts) {
  //     const parsedContacts = JSON.parse(savedContacts);
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // Записує конткти в Local Storage з state
  // componentDidUpdate() {
  //   const { contacts } = this.state;
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }

  //Записує в contacts дані з форми
  //прокидується як prop в ContactForm
  const formSubmitHandler = data => {
    const { name, number } = data;
    // const { contacts } = this.state;

    // this.setState({ name: name, number: number });
    stateContacts.push({ id: shortid.generate(), name: name, number: number });
  };

  //Записує дані з фільтру в state
  const changeFilter = e => {
    // this.setState({ filter: e.target.value });
    // setStateFilter(e.target.value);
    setStateFilter(() => e.target.value);
  };

  //Повертає відфільтровані контакти (пошук)
  const getFilteredContacts = () => {
    // const { filter, contacts } = this.state;

    // const normalizedFilter = stateFilter.toLowerCase();

    // return contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizedFilter),
    // );

    // return stateContacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizedFilter),
    // );
    return stateContacts;
  };

  const deleteContact = contactId => {
    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    setStateContacts(prevState => {
      prevState.filter(contact => contact.id !== contactId);
    });
    // }));
  };

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={formSubmitHandler} contacts={stateContacts} />
      <h2>Contacts</h2>
      <SearchContacts value={stateFilter} onChange={changeFilter} />
      <ContactsList contacts={getFilteredContacts()} onDelete={deleteContact} />
    </>
  );
};

export default App;
