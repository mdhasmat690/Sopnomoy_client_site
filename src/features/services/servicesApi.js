import { apiSlice } from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => ({
        url: "/postProject",
      }),
    }),
    getGroupProjects: builder.query({
      query: (name) => ({
        url: `/getProjectType?name=${name}`,
      }),
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
} = jobApi;
