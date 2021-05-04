import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ title, symbol, history }) => {
  const realData = history.map((price) => price.high);
  const backgroundColor =
    realData[49] > realData[48]
      ? "rgba(35, 203, 167, 0.7)"
      : "rgba(210, 77, 87, 0.8)";
  const newArr = [];
  for (let i = 0; i < 50; i++) {
    newArr.push(i);
  }
  const data = {
    labels: newArr,
    datasets: [
      {
        label: "Historical Price Point (USD)",
        data: realData,
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
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <>
      <div className="chart">
        <div>
          <h1 className="title">
            {title} ({symbol})
          </h1>
          <div className="links"></div>
        </div>
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default LineChart;
