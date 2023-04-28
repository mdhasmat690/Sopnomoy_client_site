import { apiSlice } from "../api/apiSlice";

export const collectionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateCollection: builder.mutation({
      query: ({ id, data }) => ({
        url: `/collection/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["collection"],
    }),
    getCollections: builder.query({
      query: (email) => ({
        url: `/collection?email=${email}`,
      }),
      providesTags: ["messagePost", "collection"],
    }),
  }),
});

export const { useUpdateCollectionMutation, useGetCollectionsQuery } =
  collectionApi;
