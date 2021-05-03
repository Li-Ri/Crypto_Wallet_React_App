import React from "react";
import CryptoDetail from "./CryptoDetail";

const Portfolio = ({ user, stocks }) => {
  const stockItems = stocks.map((stock) => {
    return <CryptoDetail user={user} stock={stock} />;
  });
  return { stockItems };
};

export default Portfolio;
