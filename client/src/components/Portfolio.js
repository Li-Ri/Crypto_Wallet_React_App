import React from "react";
import CryptoDetail from "./CryptoDetail";

const Portfolio = ({ user, stocks }) => {
  let userStockItems;
  if (user.portfolio !== undefined) {
    userStockItems = user.portfolio.map((stock) => {
      return <CryptoDetail user={user} stock={stock} key={user._id} />;
    });
  }
  return <>{userStockItems}</>;
};

export default Portfolio;
