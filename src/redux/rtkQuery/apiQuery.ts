import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { objectUser } from "../../types/auth";

const userApi = createApi({
  reducerPath: "userApis",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localiza-omie-api.onrender.com/api",
  }),
  endpoints: (builder) => ({
    getUsersById: builder.query({
      query: (id) => `/users/${id}`,
    }),
    authenticationUser: builder.mutation<any, objectUser>({
      query: (user) => ({
        url: "/api/auth",
        body: { ...user, provider: "user" },
        method: "POST",
      }),
    }),
    createAccount: builder.mutation<any, objectUser>({
      query: (data) => ({
        url: "/api/register",
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

export const { useAuthenticationUserMutation,useCreateAccountMutation } = userApi;

export default userApi;
