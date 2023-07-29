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
    /*   getBlogEmail: builder.query({
      query: (email) => ({
        url: `/blog/post?email=${email}`,
      }),
      providesTags: ["blog"],
    }), */
  }),
});

export const { usePostJobMutation, useGetJobsQuery } = blogApi;
