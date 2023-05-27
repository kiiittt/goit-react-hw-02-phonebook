import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Contacts.module.css';

export class Contacts extends Component {
  contactId = nanoid();

  handleDelete = contactId => {
    this.props.onDeleteContact(contactId);
  };

  render() {
    const { searchName, filteredContacts, onSearchChange } = this.props;

    return (
      <ul className={css.ul}>
        <span className={css.title}>Contacts</span>
        <label htmlFor={this.contactId} className={css.label}>
          <span className={css.findTitle}>Find contacts by name</span>
          <input
            className={css.input}
            type="text"
            id={this.contactId}
            value={searchName}
            onChange={onSearchChange}
            placeholder="Please enter a name"
          />
        </label>
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
