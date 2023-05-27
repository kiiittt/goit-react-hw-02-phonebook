import React, { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    searchName: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(`You add: ${this.state.name} ${this.state.number}`);
    const newContact = { name: this.state.name, number: this.state.number };
    const isDuplicate = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${newContact.name} already exists!`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
      }));
    }
  };

  handleSearchChange = e => {
    this.setState({ searchName: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, searchName } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchName.toLowerCase())
    );
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, name, number, searchName } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Phonebook
          name={name}
          number={number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Contacts
          contacts={contacts}
          searchName={searchName}
          filteredContacts={filteredContacts}
          onSearchChange={this.handleSearchChange}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
