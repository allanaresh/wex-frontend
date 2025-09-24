import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, fetchCarStats } from "../store/slices/carsSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import CarCard from "../components/CarCard";
import StatsChart from "../components/StatsChart";

const Home = () => {
  const dispatch = useDispatch();
  const {
    items: cars,
    stats,
    loading,
    error,
    initialized,
  } = useSelector((state) => state.cars);

  const [origin, setOrigin] = useState(null);
  // const [filteredCars, setFilteredCars] = useState(cars);

  useEffect(() => {
    if (!initialized) {
      dispatch(fetchCars());
      dispatch(fetchCarStats());
    }
  }, [dispatch, initialized, origin]);

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

  const toggleOrigin = (originObj) => {
    setOrigin((prev) => {
      return prev === Number(originObj.clickedLabel)
        ? null
        : Number(originObj.clickedLabel);
    });
  };

  const filteredCars = cars.filter((car) => {
    const matchesOrigin = !origin || car.origin === origin;
    return matchesOrigin;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Car Analytics Dashboard</h1>

      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StatsChart
            title="MPG Distribution by Origin"
            data={Object.values(stats.originDistribution)}
            labels={Object.keys(stats.originDistribution)}
            backgroundColor={["#3B82F6", "#10B981", "#F59E0B"]}
            onToggleOrigin={toggleOrigin}
          />
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Average MPG</p>
                <p className="text-2xl font-bold">{stats.avgMpg.toFixed(1)}</p>
              </div>
              <div>
                <p className="text-gray-600">Average Horsepower</p>
                <p className="text-2xl font-bold">
                  {stats.avgHorsepower.toFixed(1)}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Year Range</p>
                <p className="text-2xl font-bold">
                  {stats.yearRange.min} - {stats.yearRange.max}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white p-4 rounded-lg shadow mb-6">
        {filteredCars.length && (
          <div className="text-gray-500">
            Available sets for the origin{" "}
            {origin === null ? (
              <strong>ALL</strong>
            ) : origin === 1 ? (
              <strong>USA</strong>
            ) : origin === 2 ? (
              <strong>EUROPE</strong>
            ) : (
              <strong>JAPAN</strong>
            )}
            {" is:"} {filteredCars.length}.
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map((car, index) => (
          <CarCard key={car.id} car={car} carId={car.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
