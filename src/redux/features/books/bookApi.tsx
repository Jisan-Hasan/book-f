import { apiSLice } from '../../api/apiSlice';

const bookApi = apiSLice.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (data) => ({
        url: '/book',
        method: 'POST',
        body: data,
      }),
    }),
    getBooks: builder.query({
      query: () => '/books',
    }),
    getSingleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
  }),
});

export const { useAddBookMutation, useGetBooksQuery, useGetSingleBookQuery } =
  bookApi;
