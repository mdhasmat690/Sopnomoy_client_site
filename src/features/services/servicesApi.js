import { apiSlice } from "../api/apiSlice";
import { collectionApi } from "../collection.api/collectionApi";

export const servicesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postProject: builder.mutation({
      query: (data) => ({
        url: "/postProject",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["services"],
    }),
    DeleteProject: builder.mutation({
      query: (id) => ({
        url: `/postProject/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["services"],
    }),
    updateServiceCollection: builder.mutation({
      query: (data) => ({
        url: "/postProject",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["serviceUPCollection"],
    }),
    likeSingleServices: builder.mutation({
      query: ({ id, data }) => ({
        url: `/postProject/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["likes"],
    }),
    /*  */
    /*   thisCodeWillDelete: builder.mutation({
      query: ({ id, data }) => ({
        url: `/update/${id}`,
        method: "PATCH",
        body: data,
      }),
    }), */
    /*  */
    watchPost: builder.mutation({
      query: (id) => ({
        url: `/postProject/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["watch"],
    }),
    likePost: builder.mutation({
      query: (data) => ({
        url: "/like",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["services"],
    }),
    createCollection: builder.mutation({
      query: (data) => ({
        url: "/collection",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const data = await queryFulfilled;
        if (data?.data?.id) {
          dispatch(
            collectionApi.endpoints.updateCollection.initiate({
              id: data?.data?.id,
              data: arg,
            })
          );
        }
      },
    }),
    getServices: builder.query({
      query: () => ({
        url: "/postProject",
      }),
      providesTags: ["services", "likes", "watch", "serviceUPCollection"],
    }),
    getGroupProjects: builder.query({
      query: (name) => ({
        url: `/getProjectType?name=${name}`,
      }),
      providesTags: ["services", "likes", "watch", "serviceUPCollection"],
    }),
    getSingleServices: builder.query({
      query: (id) => ({
        url: `/postProject/${id}`,
      }),
      providesTags: ["likes", "serviceUPCollection"],
    }),
    getRelatedServices: builder.query({
      query: (email) => ({
        url: `/postProject/related/${email}`,
      }),
      providesTags: ["services", "likes", "watch", "serviceUPCollection"],
    }),
    getUserLikedServices: builder.query({
      query: (email) => ({
        url: `http://localhost:5000/api/v1/tools/like/${email}`,
      }),
      providesTags: ["services", "likes", "watch"],
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetSingleServicesQuery,
  useGetRelatedServicesQuery,
  useGetGroupProjectsQuery,
  usePostProjectMutation,
  useLikePostMutation,
  useGetUserLikedServicesQuery,
  useLikeSingleServicesMutation,
  useWatchPostMutation,
  useCreateCollectionMutation,
  useDeleteProjectMutation,
} = servicesApi;
