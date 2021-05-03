import React from "react";

const Investment = ({ user }) => {
  return (
    <>
      <h1>Investment</h1>
      <h1>{user.invested}</h1>
    </>
  );
};
export default Investment;
