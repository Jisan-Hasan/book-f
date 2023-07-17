import { apiSLice } from '../../api/apiSlice';

const bookApi = apiSLice.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (data) => ({
        url: '/book',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['books']
    }),
    getBooks: builder.query({
      query: () => '/books',
      providesTags: ['books']
    }),
    getSingleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/review/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['reviews']
    }),
    getReviews: builder.query({
      query: (id) => `/review/${id}`,
      providesTags: ['reviews']
    }),
  }),
});

export const {
  useAddBookMutation,
  useGetBooksQuery,
  useGetSingleBookQuery,
  usePostReviewMutation,
  useGetReviewsQuery,
} = bookApi;
