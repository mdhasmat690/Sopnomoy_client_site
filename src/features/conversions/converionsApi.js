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

    editConversation: builder.mutation({
      query: ({ id, data, sender }) => ({
        url: `/createConverSion/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const conversion = await queryFulfilled;
        const { success } = conversion?.data;
        // console.log(arg?.id);
        if (success) {
          const users = arg?.data?.users;
          const senderUser = users.find(
            (user) => user.email === arg?.sender?.email
          );
          const receiverUser = users.find(
            (user) => user.email !== arg?.sender?.email
          );

          dispatch(
            messagesApi.endpoints.postMessage.initiate({
              conversationId: arg?.id,
              sender: senderUser,
              receiver: receiverUser,
              message: arg.data.message,
              timestamp: arg.data.timestamp,
            })
          );
        }
      },
    }),
    /* 643520029b06bac449ac437b  643520029b06bac449ac437b */
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
  useEditConversationMutation,
} = conversationApi;
