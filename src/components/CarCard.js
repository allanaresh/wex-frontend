import React from "react";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car, carId }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/car/${carId}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={handleCardClick}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold mb-2">{car["car name"]}</h3>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600">
            <span className="font-semibold">Year:</span> {car["model year"]}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">MPG:</span> {car.mpg}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Horsepower:</span>{" "}
            {car.horsepower || "N/A"}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Origin:</span> {car.origin}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
