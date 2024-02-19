import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
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

// const persistContacts = {
//   key: 'contacts',
//   storage,
// };

// export const contactsReducer = persistReducer(persistContacts, contactsSlice.reducer);

export const contactsReducer = contactsSlice.reducer;
