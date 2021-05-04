import React from "react";

const Investment = ({ user }) => {
  return (
    <>
      <h1>Investment</h1>
      <h1>{user.invested ? user.invested.toFixed(2) : null}</h1>
    </>
  );
};
export default Investment;
