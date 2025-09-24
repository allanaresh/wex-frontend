import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../store/slices/favoritesSlice";
import CarCard from "../components/CarCard";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => {
    return state.favorites.items;
  });

  const handleFavoriteToggle = (car) => {
    dispatch(removeFavorite());
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Favorites
        <button
          onClick={handleFavoriteToggle}
          className="text-yellow-500 hover:text-yellow-600"
        >
          {favorites.length ? "★" : "☆"}
        </button>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Favorites content will be added here */}
        {favorites.length ? (
          favorites.map((car) => (
            <CarCard key={car.id} car={car} carId={car.id} />
          ))
        ) : (
          <p>No favorites added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
