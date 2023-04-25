import { apiSlice } from "../api/apiSlice";

export const collectionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateCollection: builder.mutation({
      query: ({ id, data }) => ({
        url: `/collection/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    getCollections: builder.query({
      query: (email) => ({
        url: `/collection?email=${email}`,
      }),
      providesTags: ["messagePost"],
    }),
  }),
});

export const { useUpdateCollectionMutation, useGetCollectionsQuery } =
  collectionApi;
