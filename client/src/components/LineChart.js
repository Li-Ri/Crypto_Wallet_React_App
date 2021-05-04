import React from "react";
import { Line } from "react-chartjs-2";
import FakeStock from "fake-stock-market-generator";

const LineChart = () => {
  let stockData = FakeStock.generateStockData(20);
  console.log(stockData);
  const data = {
    labels: stockData.priceData.map((data) => data.minute),
    datasets: [
      {
        label: "# of Votes",
        data: stockData.priceData.map((data) => data.price),
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
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
        <h1 className="title">Line Chart</h1>
        <div className="links"></div>
      </div>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
