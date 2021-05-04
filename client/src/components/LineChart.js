import React from "react";
import { Line } from "react-chartjs-2";
import FakeStock from "fake-stock-market-generator";

const LineChart = ({ title, symbol }) => {
  let stockData = FakeStock.generateStockData(20);
  const stockArray = stockData.priceData.map((data) => data.price);
  const backgroundColor =
    stockArray[19] > stockArray[18]
      ? "rgba(35, 203, 167, 0.7)"
      : "rgba(210, 77, 87, 0.8)";

  const data = {
    labels: stockData.priceData.map((data) => data.minute),
    datasets: [
      {
        label: "Historical Price Point (USD)",
        data: stockData.priceData.map((data) => data.price),
        fill: true,
        backgroundColor: backgroundColor,
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <div>
        <h1 className="title">
          {title} ({symbol})
        </h1>
        <div className="links"></div>
      </div>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
