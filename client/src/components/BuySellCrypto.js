import React from "react";

const BuySellCrypto = ({ buySellCrypto }) => {
  return (
    <form onSubmit={buySellCrypto}>
      <label htmlFor="amount">amount</label>
      <input type="text" id="amount" />
      <input type="submit" />
    </form>
  );
};

export default BuySellCrypto;
