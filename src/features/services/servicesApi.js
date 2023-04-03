import { apiSlice } from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => ({
        url: "/postProject",
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
} = jobApi;
