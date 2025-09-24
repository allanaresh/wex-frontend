import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearch,
  setSort,
  setOrigin,
  resetFilters,
} from "../store/slices/filtersSlice";

const FilterBar = ({ onClickAddFavorite }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleSortChange = (e) => {
    const [field, order] = e.target.value.split(":");
    dispatch(setSort({ field, order }));
  };

  const handleOriginChange = (e) => {
    console.log(e.target.value);
    dispatch(setOrigin(e.target.value));
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search
          </label>
          <input
            type="text"
            value={filters.search}
            onChange={handleSearchChange}
            placeholder="Search cars..."
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sort By
          </label>
          <select
            value={`${filters.sortBy}:${filters.sortOrder}`}
            onChange={handleSortChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="">None</option>
            <option value="mpg:asc">MPG (Low to High)</option>
            <option value="mpg:desc">MPG (High to Low)</option>
            <option value="horsepower:asc">Horsepower (Low to High)</option>
            <option value="horsepower:desc">Horsepower (High to Low)</option>
            <option value="model year:asc">Year (Old to New)</option>
            <option value="model year:desc">Year (New to Old)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Origin
          </label>
          <select
            value={filters.origin}
            onChange={handleOriginChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="">All</option>
            <option value="1">USA</option>
            <option value="2">Europe</option>
            <option value="3">Japan</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={onClickAddFavorite}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded"
          >
            Add Favorites
          </button>
        </div>
        <div className="flex items-end">
          <button
            onClick={handleReset}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
