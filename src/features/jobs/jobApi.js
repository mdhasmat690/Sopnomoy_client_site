import { apiSlice } from "../api/apiSlice";

export const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (data) => ({
        url: "/job/post",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Job"],
    }),
    /*   deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }), */
    getJobs: builder.query({
      query: () => ({
        url: "/job/post",
      }),
      providesTags: ["Job"],
    }),
    getSingleJobs: builder.query({
      query: (id) => ({
        url: `/job/post/${id}`,
      }),
      providesTags: ["Job"],
    }),
  }),
});

export const { usePostJobMutation, useGetJobsQuery, useGetSingleJobsQuery } =
  blogApi;
