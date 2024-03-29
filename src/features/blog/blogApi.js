import { apiSlice } from "../api/apiSlice";

export const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postBlog: builder.mutation({
      query: (data) => ({
        url: "/blog/post",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
    getBlog: builder.query({
      query: () => ({
        url: "/blog/post",
      }),
      providesTags: ["blog"],
    }),
    getBlogEmail: builder.query({
      query: (email) => ({
        url: `/blog/post?email=${email}`,
      }),
      providesTags: ["blog"],
    }),
  }),
});

export const {
  usePostBlogMutation,
  useGetBlogQuery,
  useGetBlogEmailQuery,
  useDeleteBlogMutation,
} = blogApi;
