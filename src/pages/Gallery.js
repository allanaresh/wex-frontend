import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars, fetchCarStats } from "../store/slices/carsSlice";
import FilterBar from "../components/FilterBar";
import CarCard from "../components/CarCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { addFavorite } from "../store/slices/favoritesSlice";

const Gallery = () => {
  const dispatch = useDispatch();
  const {
    items: cars,
    loading,
    error,
    initialized,
  } = useSelector((state) => state.cars);
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    if (!initialized) {
      dispatch(fetchCars());
      dispatch(fetchCarStats());
    }
  }, [dispatch, initialized]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  const handleFavorite = () => {
    dispatch(addFavorite(filteredCars));
  };

  const filteredCars = cars.filter((car) => {
    const matchesSearch = car["car name"]
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchesOrigin = !filters.origin || car.origin === filters.origin;
    return matchesSearch && matchesOrigin;
  });

  // Apply sorting if set
  if (filters.sortBy) {
    filteredCars.sort((a, b) => {
      const multiplier = filters.sortOrder === "asc" ? 1 : -1;
      if (a[filters.sortBy] < b[filters.sortBy]) return -1 * multiplier;
      if (a[filters.sortBy] > b[filters.sortBy]) return 1 * multiplier;
      return 0;
    });
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Car Gallery</h1>
      <FilterBar onClickAddFavorite={handleFavorite} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} carId={car.id} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
