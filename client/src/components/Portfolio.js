import React from "react";
import CryptoDetail from "./CryptoDetail";

const Portfolio = ({ user, stocks }) => {
  let userStockItems;
  if (user.portfolio) {
    userStockItems = user.portfolio.map((stock) => {
      return <CryptoDetail stock={stock} />;
    });
  }
  return <>{userStockItems}</>;
};

export default Portfolio;
