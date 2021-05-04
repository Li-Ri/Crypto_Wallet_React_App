import React from "react";

const Wallet = ({ user, addRemoveCash }) => {
  return (
    <>
      <div className="stat">
        <h2>Wallet</h2>
        <h3>${user.cash ? user.cash.toFixed(2) : null}</h3>
        <h4>Add Cash to Account</h4>
        <form onSubmit={addRemoveCash}>
          <label htmlFor="amount">Amount</label>
          <input type="text" id="amount" />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Wallet;
