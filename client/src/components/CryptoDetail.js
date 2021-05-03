import React from "react";

const CryptoDetail = ({ user, stock }) => {
  let userStock;
  if (user.stock_units !== undefined) {
    userStock = user.stock_units[stock.symbol];
  }
  return (
    <>
      <h2>Stock Owned:{userStock}</h2>
      <h1>{stock.name}</h1>
      <h3>{stock.symbol}</h3>
      <h3>Current Price: {stock.currentPrice}</h3>
      <h3>Price Change: {stock.priceChange}</h3>
    </>
  );
};

export default CryptoDetail;
