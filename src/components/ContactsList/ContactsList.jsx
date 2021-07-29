import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.ContactsList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}
          {': '}
          {contact.number}
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
