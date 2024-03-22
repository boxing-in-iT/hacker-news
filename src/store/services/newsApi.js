import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hacker-news.firebaseio.com/v0",
  }),
  endpoints: (builder) => ({
    allNews: builder.query({
      query: () => `/newstories.json`,
    }),
    newsById: builder.query({
      query: (id) => `/item/${id}.json`,
    }),
    getComment: builder.query({
      query: (id) => `/item/${id}.json`,
    }),
  }),
});

export const { useAllNewsQuery, useNewsByIdQuery, useGetCommentQuery } =
  newsApi;
