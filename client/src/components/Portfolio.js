import React from "react";
import CryptoDetail from "./CryptoDetail";

const Portfolio = ({ user, stocks }) => {
  let userStockItems;
  if (user.portfolio !== undefined) {
    userStockItems = user.portfolio.map((stock, index) => {
      return <CryptoDetail user={user} stock={stock} key={index} />;
    });
  }
  return <>{userStockItems}</>;
};

export default Portfolio;
