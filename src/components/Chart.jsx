import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function Chart({ country }) {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const url =
        country === "worldwide"
          ? "https://disease.sh/v3/covid-19/historical/all?lastdays=30"
          : `https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`;
      const res = await axios.get(url);
      const data = country === "worldwide" ? res.data : res.data.timeline;

      const chartLabels = Object.keys(data.cases);
      const casesData = Object.values(data.cases);

      setChartData({
        labels: chartLabels,
        datasets: [
          {
            label: "Cases",
            data: casesData,
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59, 130, 246, 0.2)",
            tension: 0.3,
            fill: true,
          },
        ],
      });
    };

    fetchData();
  }, [country]);

  return (
    <div className="mt-10 w-full max-w-2xl mx-auto bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4 text-center">Cases in the Last 30 Days</h2>
      <Line data={chartData} />
    </div>
  );
}

export default Chart;
