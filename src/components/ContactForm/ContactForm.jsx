import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };


  nameId = nanoid();
  numberId = nanoid();

  render() {
    const { onChange, onSubmit } = this.props;

    return (
      <form onSubmit={onSubmit} className={css.form}>
        <label htmlFor={this.nameId} className={css.label}>
          <input
            className={css.input}
            type="text"
            name="name"
            onChange={onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameId}
            placeholder="Name"
          />
        </label>
        <label htmlFor={this.numberId} className={css.label}>
          <input
            className={css.input}
            type="tel"
            name="number"
            onChange={onChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberId}
            placeholder="Phone number"
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}


