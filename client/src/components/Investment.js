import React from "react";

const Investment = ({ user }) => {
  return (
    <>
      <h1>Investment</h1>
      <h1>{user.invested.toFixed(2)}</h1>
    </>
  );
};
export default Investment;
