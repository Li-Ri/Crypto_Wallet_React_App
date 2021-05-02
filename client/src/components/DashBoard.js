import React, { useState, useEffect } from "react";
import { getCryptos } from "../services/ApiServices";

const DashBoard = () => {
  const [stocks, setStocks] = useState();
  const [user, setUser] = useState();

  const fetchStock = () => {
    getCryptos().then((cryptos) => setStocks(cryptos));
  };

  useEffect(() => {
    fetchStock();
  }, []);

  return <h1>This is my Dashboard</h1>;
};

export default DashBoard;
