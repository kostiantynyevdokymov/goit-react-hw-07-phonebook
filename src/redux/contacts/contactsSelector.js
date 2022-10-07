import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.contacts.filter;

export const selectVisibleContacts = createSelector(
  [selectItems, selectFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
