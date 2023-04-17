import { apiSlice } from "../api/apiSlice";
import { messagesApi } from "../message/messagesApi";

const conversationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversions: builder.query({
      query: (email) => ({
        url: `/createConverSions/allConversion?email=${email}`,
      }),
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
        const patchRes = dispatch(
          apiSlice.util.updateQueryData(
            "getConversions",
            arg.sender,

            (draft) => {
              console.log(draft);
              const draftConversation = draft.find((c) => c.id == arg.id);
              console.log(draftConversation);
              draftConversation.message = arg.data.message;
              draftConversation.timestamp = arg.data.timestamp;
            }
          )
        );
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

            const res = dispatch(
              messagesApi.endpoints.postMessage.initiate({
                conversationId: arg?.id,
                sender: senderUser,
                receiver: receiverUser,
                message: arg.data.message,
                timestamp: arg.data.timestamp,
              })
            ).unwrap();

            // update messages cache pessimistically start
            dispatch(
              apiSlice.util.updateQueryData(
                "getMessages",
                res.conversationId.toString(),
                (draft) => {
                  console.log(draft);
                }
              )
            );
            // update messages cache pessimistically end
          }
        } catch (error) {
          patchRes.undo();
        }
      },
    }),
    /* 643520029b06bac449ac437b  643520029b06bac449ac437b */
    conversion: builder.query({
      query: ({ user, serviceUser }) => ({
        url: `/createConverSion?email=${user}-${serviceUser}`,
      }),
    }),
    /*    getConversions: builder.query({
      query: (email) => ({
        url: `/createConverSions/allConversion?email=${email}`,
      }),
    }), */
  }),
});

export const {
  useAddConversationMutation,
  useConversionQuery,
  useGetConversionsQuery,
  useEditConversationMutation,
} = conversationApi;
