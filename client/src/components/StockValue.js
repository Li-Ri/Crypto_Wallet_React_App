import React from "react";

const StockValue = ({ user, stocks }) => {
  let stocksInvested;
  let totalValue = stocks.reduce((accum, current) => {
    if (user.stock_units && user.stock_units[current.symbol] !== undefined) {
      accum += current.currentPrice * user.stock_units[current.symbol];
    }
    return accum;
  }, 0);

  console.log(totalValue);
  return <>{totalValue == NaN || totalValue === 0 ? null : totalValue}</>;
};

export default StockValue;
