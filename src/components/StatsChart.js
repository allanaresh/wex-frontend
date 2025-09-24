import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatsChart = ({
  title,
  data,
  labels,
  backgroundColor,
  onToggleOrigin,
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
        },
      },
    },
    maintainAspectRatio: false,
    onHover: (event, elements) => {
      if (event.native) {
        const target = event.native.target;
        target.style.cursor = elements.length ? "pointer" : "default";
      }
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const element = elements[0];
        const datasetIndex = element.datasetIndex;
        const index = element.index;

        const clickedLabel = chartData.labels[index];
        const clickedValue = chartData.datasets[datasetIndex].data[index];
        // console.log(`${clickedLabel}, ${clickedValue}`);

        onToggleOrigin({ clickedLabel, clickedValue });
      }
    },
  };

  return (
    <div className="h-[300px] bg-white rounded-lg shadow-lg p-4">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default StatsChart;
