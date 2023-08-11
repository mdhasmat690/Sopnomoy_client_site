import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sopnomoy-project-server.onrender.com/api/v1",
  }),
  tagTypes: [
    "service",
    "conversionPost",
    "messagePost",
    "likes",
    "watch",
    "collection",
    "serviceUPCollection",
    "user",
    "blog",
    "Job",
  ],
  endpoints: (builder) => ({}),
});
