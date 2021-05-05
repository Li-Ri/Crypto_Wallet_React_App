import React from "react";

const ProfitLoss = ({ stocks, user }) => {
  let stocksInvested;
  let totalValue = stocks.reduce((accum, current) => {
    if (user.stock_units && user.stock_units[current.symbol] !== undefined) {
      accum += current.currentPrice * user.stock_units[current.symbol];
    }
    return accum;
  }, 0);
  const profitLoss = () => {
    return (totalValue - user.invested).toFixed(2);
  };
  return (
    <>
      <div className="stat">
        <h2>Profit/Loss</h2>
        <h3>${profitLoss()}</h3>
      </div>
    </>
  );
};

export default ProfitLoss;
