import React, { useState } from "react";

const BuySellCrypto = ({ buySellCrypto, stocks, user, sellStock }) => {
  const [convert, setConvert] = useState();
  const handleChange = (event) => {
    setConvert(event.target.value);
  };
  const handleClickBuy = () => {
    const btn = document.querySelector(`#buy`).classList;
    btn.toggle("hidden");
  };
  const handleClickSell = () => {
    const btn = document.querySelector(`#sell`).classList;
    btn.toggle("hidden");
  };
  const stockOptions = stocks.map((stock, index) => {
    return (
      <option value={stock.name} key={index}>
        {stock.symbol}
      </option>
    );
  });

  let sellOptions;
  if (user.portfolio) {
    sellOptions = user.portfolio.map((stock, index) => {
      if (user.stock_units[stock.symbol] > 0) {
        return (
          <option value={stock.name} key={index}>
            {stock.symbol}
          </option>
        );
      }
    });
  }

  return (
    <>
      <div className="stat">
        <h2>
          <button onClick={handleClickBuy}>Buy</button>
          <button onClick={handleClickSell}>Sell</button>
        </h2>
        <form onSubmit={buySellCrypto} id="buy" value="buy" className="hidden">
          <label htmlFor="amount">Buy</label>
          <select id="id">
            <option value="">Please pick a coin</option>
            {stockOptions}
          </select>
          <input type="number" id="amount" min="0.001" step="0.001" />
          <input type="submit" value="Buy Stock" />
        </form>
        <form onSubmit={sellStock} id="sell" value="sell" className="hidden">
          <label htmlFor="amount">Sell</label>
          <select id="id">
            <option value="">Select Stock to Sell</option>
            {sellOptions}
          </select>
          <input type="number" id="amount" min="0.001" step="0.001" />
          <input type="submit" value="Sell Stock" />
        </form>
      </div>
    </>
  );
};

export default BuySellCrypto;
