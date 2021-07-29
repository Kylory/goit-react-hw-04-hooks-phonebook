import React, { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import SearchContacts from './components/SearchContacts/SearchContacts';
import shortid from 'shortid';

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };
const App = () => {
  const [stateContacts, setStateContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
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
    data.id = shortid.generate();
    setStateContacts(prevState => [...prevState, data]);
  };

  //Записує дані з фільтру в state
  const changeFilter = e => {
    setStateFilter(() => e.target.value);
  };

  //Повертає відфільтровані контакти (пошук)
  const getFilteredContacts = () => {
    console.log('getFilteredContacts works');
    const normalizedFilter = stateFilter.toLowerCase();
    console.log('stateContacts', stateContacts);
    console.log(
      'stateContacts.filter',
      stateContacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      ),
    );
    return stateContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    setStateContacts(prevState => {
      // console.log(prevState);
      // console.log(prevState.filter(contact => contact.id !== contactId));
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
