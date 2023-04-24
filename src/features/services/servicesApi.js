import { apiSlice } from "../api/apiSlice";

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
    likeSingleServices: builder.mutation({
      query: ({ id, data }) => ({
        url: `/postProject/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["likes"],
    }),
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
    getServices: builder.query({
      query: () => ({
        url: "/postProject",
      }),
      providesTags: ["services", "likes", "watch"],
    }),
    getGroupProjects: builder.query({
      query: (name) => ({
        url: `/getProjectType?name=${name}`,
      }),
      providesTags: ["services", "likes", "watch"],
    }),
    getSingleServices: builder.query({
      query: (id) => ({
        url: `/postProject/${id}`,
      }),
    }),
    getRelatedServices: builder.query({
      query: (email) => ({
        url: `/postProject/related/${email}`,
      }),
      providesTags: ["services", "likes", "watch"],
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
} = servicesApi;
