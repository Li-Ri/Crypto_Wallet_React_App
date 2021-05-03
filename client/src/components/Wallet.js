import React from "react";

const Wallet = ({ user, addRemoveCash }) => {
  return (
    <>
      <h1>{user.cash}</h1>
      <h2>Add Cash to Account</h2>
      <form onSubmit={addRemoveCash}>
        <label htmlFor="amount">Amount</label>
        <input type="text" id="amount" />
        <input type="submit" />
      </form>
    </>
  );
};

export default Wallet;
