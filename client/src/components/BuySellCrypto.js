import React from "react";

const BuySellCrypto = ({ buySellCrypto, stocks, user, sellStock }) => {
  const stockOptions = stocks.map((stock, index) => {
    return (
      <option value={stock._id} key={index}>
        {stock.symbol}
      </option>
    );
  });

  let sellOptions;
  if (user.portfolio) {
    sellOptions = user.portfolio.map((stock, index) => {
      return (
        <option value={stock._id} key={index}>
          {stock.symbol}
        </option>
      );
    });
  }

  return (
    <>
      <div className="stat">
        <h2>Buy/Sell</h2>
        <form onSubmit={buySellCrypto}>
          <label htmlFor="amount">Buy</label>
          <select id="id">
            <option value="">Please pick a coin</option>
            {stockOptions}
          </select>
          <input type="number" id="amount" min="0.001" step="0.001" />
          <input type="submit" />
        </form>

        <form onSubmit={sellStock}>
          <label htmlFor="amount">Sell</label>
          <select id="id">
            <option value="">Select Stock to Sell</option>
            {sellOptions}
          </select>
          <input type="number" id="amount" min="0.001" step="0.001" />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default BuySellCrypto;
