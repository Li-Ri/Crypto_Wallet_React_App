import React from "react";
import CryptoDetail from "./CryptoDetail";

const Portfolio = ({ user, stocks }) => {
  let userStockItems;

  if (user.portfolio !== undefined) {
    userStockItems = user.portfolio.map((stock, index) => {
      if (user.stock_units[stock.symbol] > 0) {
        return (
          <CryptoDetail
            user={user}
            stock={stock}
            key={index}
            stocks={stocks}
          />
        );
      }
    });
  }
  return (
    <>
      <div className="portfolio">{userStockItems}</div>
    </>
  );
};

export default Portfolio;
