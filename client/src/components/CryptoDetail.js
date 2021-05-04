import React, { useEffect } from "react";
import LineChart from "../components/LineChart";
const CryptoDetail = ({ user, stock }) => {
  let userStock;
  if (user.stock_units !== undefined) {
    userStock = user.stock_units[stock.symbol];
  }

  return (
    <>
      <h4>Stock Owned:{userStock}</h4>
      <h4>Value: {userStock ? userStock * stock.currentPrice : null}</h4>
      <LineChart title={stock.name} symbol={stock.symbol} />
      <h3>Current Price: {stock.currentPrice}</h3>
      <h3>Price Change: {stock.priceChange}</h3>
    </>
  );
};

export default CryptoDetail;
