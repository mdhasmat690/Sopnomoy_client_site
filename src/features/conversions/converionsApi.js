import { apiSlice } from "../api/apiSlice";
import { messagesApi } from "../message/messagesApi";

const conversationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addConversation: builder.mutation({
      query: ({ sender, data }) => ({
        url: "/createConverSion",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const conversion = await queryFulfilled;
        if (conversion?.data?.id) {
          const users = arg?.data?.users;

          const senderUser = users.find(
            (user) => user.email === arg?.sender?.email
          );
          const receiverUser = users.find(
            (user) => user.email !== arg?.sender?.email
          );
          dispatch(
            messagesApi.endpoints.postMessage.initiate({
              conversationId: conversion?.data?.id,
              sender: senderUser,
              receiver: receiverUser,
              message: arg.data.message,
              timestamp: arg.data.timestamp,
            })
          );
        }
      },
    }),

    /*  */
    /*   addConversation: builder.mutation({
      query: ({ sender, data }) => ({
        url: "/conversations",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const conversation = await queryFulfilled;
        if (conversation?.data?.id) {
          silent entry to message table
          const users = arg.data.users;
          const senderUser = users.find((user) => user.email === arg.sender);
          const receiverUser = users.find((user) => user.email !== arg.sender);
            dispatch(
            messagesApi.endpoints.addMessage.initiate({
              conversationId: conversation?.data?.id,
              sender: senderUser,
              receiver: receiverUser,
              message: arg.data.message,
              timestamp: arg.data.timestamp,
            })
          );
        }
      },
    }), */
    /*  */

    conversion: builder.query({
      query: ({ user, serviceUser }) => ({
        url: `/createConverSion?email=${user}-${serviceUser}`,
      }),
    }),
    getConversions: builder.query({
      query: (email) => ({
        url: `/createConverSions/allConversion?email=${email}`,
      }),
    }),
  }),
});

export const {
  useAddConversationMutation,
  useConversionQuery,
  useGetConversionsQuery,
} = conversationApi;
