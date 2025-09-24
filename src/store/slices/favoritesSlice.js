import { createSlice } from "@reduxjs/toolkit";

const getFavoritesFromStorage = () => {
  try {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error("Error loading favorites from localStorage:", error);
    return [];
  }
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: getFavoritesFromStorage(),
  },
  reducers: {
    addFavorite: (state, action) => {
      state.items = [].concat(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
    removeFavorite: (state, action) => {
      state.items = [];
      localStorage.removeItem("favorites");
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
