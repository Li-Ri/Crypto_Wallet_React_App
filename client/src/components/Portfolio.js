import React from "react";
import CryptoDetail from "./CryptoDetail";

const Portfolio = ({ user, stocks }) => {
  const stockItems = stocks.map((stock) => {
    return <CryptoDetail user={user} stock={stock} />;
  });

  return <div>{stockItems}</div>;
};

export default Portfolio;
