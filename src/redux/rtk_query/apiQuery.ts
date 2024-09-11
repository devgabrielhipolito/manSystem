import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApis",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => "/users",
    }),
    getUsersById: builder.query({
      query: (id) => `/users/${id}`,
    }),
    singUpApi: builder.mutation({
      query: (user) => ({
        url: "/users",
        body: user,
        method: "POST",
      }),
    }),
    updateUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "PATCH",
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetUsersQuery,useSingUpApiMutation } = userApi;

export default userApi;
