import React, { useEffect, useState } from "react";
import LineChart from "../components/LineChart";
const CryptoDetail = ({ user, stock, stocks }) => {
  const [dataShown, setDataShown] = useState(false);
  let userStock;

  const foundStock = stocks.find((crypto) => crypto.name === stock.name);
  if (user.stock_units !== undefined) {
    userStock = user.stock_units[stock.symbol];
  }

  return (
    <>
      <div
        className="stock-container"
        onMouseEnter={() => setDataShown(true)}
        onMouseLeave={() => setDataShown(false)}
      >
        <LineChart
          title={stock.name}
          symbol={stock.symbol}
          history={stock.history}
        />
        {dataShown ? (
          <div data-testid="crypto-detail" className="stock-data">
            <h4>Stock Owned:{userStock ? userStock.toFixed(5) : null}</h4>
            <h4>
              Value:
              {userStock ? (userStock * stock.currentPrice).toFixed(3) : null}
            </h4>
            <h3>
              Current Price:
              {foundStock ? foundStock.currentPrice.toFixed(2) : null}
            </h3>
            <h3>Price Change: {foundStock ? foundStock.priceChange : null}%</h3>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CryptoDetail;
