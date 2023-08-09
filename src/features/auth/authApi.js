import { apiSlice } from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/user",
        body: data,
      }),
    }),
    userUpdate: builder.mutation({
      query: ({ id, data }) => ({
        url: `/user/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    getUserData: builder.query({
      query: (email) => ({
        url: `/user/${email}`,
      }),
      providesTags: ["user"],
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useGetUserDataQuery,
  useUserUpdateMutation,
} = authApi;
