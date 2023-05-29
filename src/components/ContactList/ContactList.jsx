import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  contactId = nanoid();

  handleDelete = contactId => {
    this.props.onDeleteContact(contactId);
  };

  render() {
    const { filteredContacts } = this.props;

    return (
      <ul className={css.ul}>
        {filteredContacts.map((contact, index) => (
          <li key={index} className={css.li}>
            <span className={css.name}>{contact.name}:</span>
            <span className={css.tel}>{contact.number}</span>
            <button
              className={css.btn}
              type="button"
              onClick={() => this.handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
