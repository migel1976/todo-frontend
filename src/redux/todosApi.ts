import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITodo } from '../types/todo';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3003/api/todos/' }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodos: builder.query<ITodo[] | undefined, void>({
      query: () => 'getall',
      providesTags: ['Todo'],
    }),
    addTodo: builder.mutation({
      query: (body) => ({
        url: 'add',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `remove/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
    updateTodo: builder.mutation({
      query: (body) => ({
        url: `edit/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } = todosApi;
