import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact } from './contacts-actions';

const contactsReducer = createReducer([], {
  // Можна записувати [addContact.type]
  [addContact]: (store, action) => [...store, action.payload],
  [removeContact]: (store, action) =>
    store.filter(({ id }) => id !== action.payload),
});

export default contactsReducer;
