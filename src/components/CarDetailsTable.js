import React from "react";

const CarDetailsTable = ({ car }) => {
  if (!car) {
    return null;
  }

  const carDetails = [
    { label: "Car Name", value: car["car name"] },
    { label: "Model Year", value: car["model year"] },
    { label: "MPG", value: car.mpg },
    { label: "Cylinders", value: car.cylinders },
    { label: "Displacement", value: car.displacement },
    { label: "Horsepower", value: car.horsepower },
    { label: "Weight (lbs)", value: car.weight },
    { label: "Acceleration", value: car.acceleration },
    { label: "Origin", value: car.origin },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              Property
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              Value
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {carDetails.map((detail, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {detail.label}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {detail.value !== undefined ? detail.value : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarDetailsTable;
