import { createAPI, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createAPI({
  reducerPath: "todos",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
