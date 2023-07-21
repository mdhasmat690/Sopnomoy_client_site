import { apiSlice } from "../api/apiSlice";

export const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postBlog: builder.mutation({
      query: (data) => ({
        url: "/blog/post",
        method: "POST",
        body: data,
      }),
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
    }),
    getBlog: builder.query({
      query: () => ({
        url: "/blog/post",
      }),
    }),
    getBlogEmail: builder.query({
      query: (email) => ({
        url: `/blog/post?email=${email}`,
      }),
    }),
  }),
});

export const {
  usePostBlogMutation,
  useGetBlogQuery,
  useGetBlogEmailQuery,
  useDeleteBlogMutation,
} = blogApi;
