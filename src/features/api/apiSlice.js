import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/tools",
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});

/* const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_NOT_SECRET_CODE,
  }),
  endpoints: (builder) => ({}),
});
export default apiSlice;
http://localhost:5000/api/v1/tools/users
*/
