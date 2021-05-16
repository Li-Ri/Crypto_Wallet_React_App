import React, { useState } from "react";

const Wallet = ({ user, addRemoveCash }) => {
  const handleClick = () => {
    const btn = document.querySelector("#add").classList;
    btn.toggle("hidden");
  };
  return (
    <>
      <div className="stat">
        <h2>Wallet</h2>
        <h3 data-testid="wallet-total">
          ${user.cash ? user.cash.toFixed(2).toString() : null}
        </h3>
        <h4>
          <button data-testid="add-money" onClick={handleClick}>
            Add Cash to Account
          </button>
        </h4>
        <form onSubmit={addRemoveCash} className="hidden" id="add">
          <label htmlFor="amount">Amount</label>
          <input data-testid="wallet-form" type="text" id="amount" />
          <input data-testid="wallet-form-submit" type="submit" />
        </form>
      </div>
    </>
  );
};

export default Wallet;
