import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phoneBookApi from 'servies/API';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await phoneBookApi.fetchContacts();
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await phoneBookApi.fetchPost(contact);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await phoneBookApi.fetchDelete(contactId);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
