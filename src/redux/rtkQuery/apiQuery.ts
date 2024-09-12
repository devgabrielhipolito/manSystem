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
        url: "/login",
        body: { ...user, provider: "user" },
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

export const { useAuthenticationUserMutation } = userApi;

export default userApi;
