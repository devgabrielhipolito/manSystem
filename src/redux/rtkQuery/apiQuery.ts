import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { objectUser } from "../../types/auth";
import Cookies from "../utils/Cookies";

const userApi = createApi({
  reducerPath: "userApis",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    credentials: "include",
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

      onQueryStarted: async (arg, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          console.log("treste");
        } catch (error) {}
      },
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
