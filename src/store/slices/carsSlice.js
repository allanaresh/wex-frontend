import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL; //"http://localhost:3001/api";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/cars`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchCarStats = createAsyncThunk(
  "cars/fetchCarStats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/cars/stats`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    stats: null,
    loading: false,
    error: null,
    initialized: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        if (!state.initialized) {
          state.loading = true;
        }
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.initialized = true;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.initialized = true;
      })
      .addCase(fetchCarStats.fulfilled, (state, action) => {
        state.stats = action.payload;
      });
  },
});

export default carsSlice.reducer;
