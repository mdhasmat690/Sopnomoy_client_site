import { apiSlice } from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postProject: builder.mutation({
      query: (data) => ({
        url: "/postProject",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["services"],
    }),
    getServices: builder.query({
      query: () => ({
        url: "/postProject",
      }),
      providesTags: ["services"],
    }),
    getGroupProjects: builder.query({
      query: (name) => ({
        url: `/getProjectType?name=${name}`,
      }),
      providesTags: ["services"],
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
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetSingleServicesQuery,
  useGetRelatedServicesQuery,
  useGetGroupProjectsQuery,
  usePostProjectMutation,
} = jobApi;
