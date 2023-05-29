import React, { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { searchName, onSearchChange } = this.props;

    return (
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
    );
  }
}

Filter.propTypes = {
  searchName: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};
