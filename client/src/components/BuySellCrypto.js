import React from "react";

const BuySellCrypto = ({ buySellCrypto, stocks }) => {
  const stockOptions = stocks.map((stock, index) => {
    return (
      <option value={stock._id} key={index}>
        {stock.symbol}
      </option>
    );
  });

  return (
    <form onSubmit={buySellCrypto}>
      <label htmlFor="amount">amount</label>
      <select id="id">
        <option value="">Please pick a coin</option>
        {stockOptions}
      </select>
      <input type="number" id="amount" min="0.001" step="0.001" />
      <input type="submit" />
    </form>
  );
};

export default BuySellCrypto;
