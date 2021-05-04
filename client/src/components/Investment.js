import React from "react";

const Investment = ({ user }) => {
  return (
    <>
      <div className="stat">
        <h2>Investment</h2>
        <h3>${user.invested ? user.invested.toFixed(2) : null}</h3>
      </div>
    </>
  );
};
export default Investment;
