import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CarDetailsTable from "../components/CarDetailsTable";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchCars } from "../store/slices/carsSlice";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    items: cars,
    loading,
    error,
    initialized,
  } = useSelector((state) => state.cars);
  const car = cars.find((c) => c.id === id);

  useEffect(() => {
    if (!initialized) {
      dispatch(fetchCars());
    }
  }, [dispatch, initialized]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-red-500">Car not found</div>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Car Details</h1>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
        >
          Back
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <CarDetailsTable car={car} />
      </div>
    </div>
  );
};

export default CarDetails;
