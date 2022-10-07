// Need to use the React-specific entry point to allow generating React hooks

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://633c603174afaef164081849.mockapi.io/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts/`,
      providesTags: ['Material'],
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: `contacts/`,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Material'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Material'],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
