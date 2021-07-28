import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchContacts.module.css';

const SearchContacts = ({ value, onChange }) => {
  return (
    <label className={styles.searchContacts}>
      Find contacts by name
      <input name="filter" type="text" value={value} onChange={onChange} />
    </label>
  );
};

SearchContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchContacts;
