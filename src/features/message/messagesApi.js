import { apiSlice } from "../api/apiSlice";

export const messagesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (id) => ({
        url: `/message/${id}`,
      }),
    }),
    postMessage: builder.mutation({
      query: (data) => ({
        url: "/message",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePostMessageMutation, useGetMessagesQuery } = messagesApi;

/* import { apiSlice } from "../api/apiSlice";

const messageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postMessage: builder.mutation({
      query: (data) => ({
        url: "/message",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePostMessageMutation } = messageApi;
 */
