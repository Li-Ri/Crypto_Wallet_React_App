import React from "react";

const CryptoDetail = ({ users, stock }) => {
  return (
    <>
      <h1>{stock.name}</h1>
      <h3>{stock.currentPrice}</h3>
    </>
  );
};

export default CryptoDetail;
