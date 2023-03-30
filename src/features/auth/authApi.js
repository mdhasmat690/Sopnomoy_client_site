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
  }),
});

export const { useUserRegisterMutation } = authApi;
