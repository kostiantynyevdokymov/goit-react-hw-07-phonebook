import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from '../servies/API';
import { filterSlice } from './contacts/contactSlice';

// create store
export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
