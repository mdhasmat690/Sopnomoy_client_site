import { apiSlice } from "../api/apiSlice";
import { messagesApi } from "../message/messagesApi";

const conversationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversions: builder.query({
      query: (email) => ({
        url: `/createConverSions/allConversion?email=${email}`,
      }),
      providesTags: ["conversionPost"],
    }),
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
        try {
          const conversion = await queryFulfilled;
          const { success } = conversion?.data;
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
            ).unwrap();
          }
        } catch (error) {
          console.log(error);
        } finally {
          dispatch(
            apiSlice.util.invalidateTags(["messagePost", "conversionPost"])
          );
        }
      },
    }),
    conversion: builder.query({
      query: ({ user, serviceUser }) => ({
        url: `/createConverSion?email=${user}-${serviceUser}`,
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
