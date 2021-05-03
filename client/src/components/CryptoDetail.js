import React, { useEffect } from "react";

const CryptoDetail = ({ user, stock }) => {
  let userStock;
  if (user.stock_units !== undefined) {
    userStock = user.stock_units[stock.symbol];
  }

  return (
    <>
      <h4>Stock Owned:{userStock}</h4>
      <h4>Value: {userStock ? userStock * stock.currentPrice : null}</h4>

      <h1>{stock.name}</h1>
      <h3>{stock.symbol}</h3>
      <h3>Current Price: {stock.currentPrice}</h3>
      <h3>Price Change: {stock.priceChange}</h3>
    </>
  );
};

export default CryptoDetail;
