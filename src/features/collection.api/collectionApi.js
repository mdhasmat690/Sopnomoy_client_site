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
    updateCollectionName: builder.mutation({
      query: ({ id, data }) => ({
        url: `/collection/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["collection"],
    }),
    DeleteCollectionName: builder.mutation({
      query: (id) => ({
        url: `/collection/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["collection"],
    }),
    getCollections: builder.query({
      query: (email) => ({
        url: `/collection?email=${email}`,
      }),
      providesTags: ["messagePost", "collection", "serviceUPCollection"],
    }),
    getSingleCollections: builder.query({
      query: (id) => ({
        url: `/collection/${id}`,
      }),
      providesTags: ["messagePost", "collection", "serviceUPCollection"],
    }),
    getSingleCollectionsitems: builder.query({
      query: (id) => ({
        url: `/collections/collection/${id}`,
      }),
      providesTags: [
        "services",
        "likes",
        "watch",
        "messagePost",
        "collection",
        "serviceUPCollection",
      ],
    }),
  }),
});

export const {
  useUpdateCollectionMutation,
  useGetCollectionsQuery,
  useGetSingleCollectionsQuery,
  useGetSingleCollectionsitemsQuery,
  useUpdateCollectionNameMutation,
  useDeleteCollectionNameMutation,
} = collectionApi;
