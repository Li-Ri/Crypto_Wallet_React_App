import React, { useEffect } from "react";
import LineChart from "../components/LineChart";
const CryptoDetail = ({ user, stock }) => {
  let userStock;
  if (user.stock_units !== undefined) {
    userStock = user.stock_units[stock.symbol];
  }

  return (
    <>
      <div className="stock-container">
        <div className="stock-data">
          <h4>Stock Owned:{userStock}</h4>
          <h4>
            Value:{" "}
            {userStock ? (userStock * stock.currentPrice).toFixed(2) : null}
          </h4>
          <h3>Current Price: ${stock.currentPrice.toFixed(2)}</h3>
          <h3>Price Change: {stock.priceChange}%</h3>
        </div>
        <LineChart
          title={stock.name}
          symbol={stock.symbol}
          history={stock.history}
        />
      </div>
    </>
  );
};

export default CryptoDetail;
