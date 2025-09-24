import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./slices/carsSlice";
import filtersReducer from "./slices/filtersSlice";
import favoritesReducer from "./slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
});

export default store;
