import { apiSlice } from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/users",
        body: data,
      }),
    }),
    getUserData: builder.query({
      query: (email) => ({
        url: `/${email}`,
      }),
    }),
  }),
});

export const { useUserRegisterMutation, useGetUserDataQuery } = authApi;
