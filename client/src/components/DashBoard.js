import React, { useState, useEffect } from "react";
import { Cryptos } from "../services/ApiServices";

const DashBoard = () => {
  const [stocks, setStocks] = useState([]);
  const [user, setUser] = useState({});

  const fetchStock = () => {
    Cryptos.getCryptos().then((cryptos) => setStocks(cryptos));
  };

  useEffect(() => {
    fetchStock();
  }, []);

  return <h1>This is my Dashboard</h1>;
};

export default DashBoard;
