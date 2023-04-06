import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTag: "",
};

const serviceSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchTag = action.payload;
    },
  },
});

export default serviceSlice.reducer;
export const { search } = serviceSlice.actions;
