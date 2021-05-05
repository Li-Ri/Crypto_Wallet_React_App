import React from "react";

const StockValue = ({ user, stocks, stockData }) => {
  let stocksInvested;
  let totalValue = stocks.reduce((accum, current) => {
    if (user.stock_units && user.stock_units[current.symbol] !== undefined) {
      accum += current.currentPrice * user.stock_units[current.symbol];
    }
    return accum;
  }, 0);

  return (
    <>
      {totalValue == NaN || totalValue === 0 ? null : (
        <div className="stat">
          <h2>Total Stock Value</h2>
          <h3>${totalValue.toFixed(2)}</h3>
        </div>
      )}
    </>
  );
};

export default StockValue;
