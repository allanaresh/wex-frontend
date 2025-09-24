import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    sortBy: "",
    sortOrder: "asc",
    origin: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSort: (state, action) => {
      const { field, order } = action.payload;
      state.sortBy = field;
      state.sortOrder = order;
    },
    setOrigin: (state, action) => {
      state.origin = Number(action.payload);
    },
    resetFilters: (state) => {
      state.search = "";
      state.sortBy = "";
      state.sortOrder = "asc";
      state.origin = "";
    },
  },
});

export const { setSearch, setSort, setOrigin, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
