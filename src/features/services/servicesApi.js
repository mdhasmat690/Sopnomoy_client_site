import { apiSlice } from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getJob: builder.query({
      query: () => ({
        url: "/postProject",
      }),
    }),
  }),
});

export const { useGetJobQuery } = jobApi;
