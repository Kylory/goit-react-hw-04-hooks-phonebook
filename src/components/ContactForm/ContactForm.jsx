import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = props => {
  const [stateName, setStateName] = useState('');
  const [stateNumber, setStateNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setStateName(value);
        break;

      case 'number':
        setStateNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      props.contacts &&
      props.contacts.find(contact => contact.name === stateName)
    ) {
      return alert(stateName + ' is already in contacts');
    }

    //При сабміті форми передає дані в formSubmitHandler(onSubmit), яка в пропсах
    props.onSubmit({ name: stateName, number: stateNumber });
    reset();
  };

  const reset = () => {
    setStateName('');
    setStateNumber('');
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          name="name"
          type="text"
          value={stateName}
          onChange={handleChange}
        />
      </label>

      <label>
        Number
        <input
          name="number"
          type="text"
          value={stateNumber}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
