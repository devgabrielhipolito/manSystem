import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { objectUser } from "../../types/auth";

const userApi = createApi({
  reducerPath: "userApis",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getUsersById: builder.query({
      query: (id) => `/users/${id}`,
    }),
    authenticationUser: builder.mutation<any, objectUser>({
      query: (user) => ({
        url: "/auth/login",
        body: { ...user, provider: "user" },
        method: "POST",
      }),
    }),
    createAccountUser: builder.mutation<any, objectUser>({
      query: (data) => ({
        url: "/auth/register",
        body: data,
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

export const { useAuthenticationUserMutation, useCreateAccountUserMutation } =
  userApi;

export default userApi;
