import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContacts: (state, action) => {
      return [...state, action.payload];
      // state.push(state, action.payload)
    },
    prepare(contacts) {
      return {
        payload: {
          contacts,
        },
      };
    },
    deleteContacts: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;

const persistContacts = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(persistContacts, contactsSlice.reducer);

// export const contactsReducer = contactsSlice.reducer;
