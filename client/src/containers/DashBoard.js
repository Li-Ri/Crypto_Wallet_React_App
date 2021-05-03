import React, { useState, useEffect } from "react";
import { Cryptos } from "../services/ApiServices";
import { UserService } from "../services/UserServices";
import Portfolio from "../components/Portfolio";
import StockValue from "../components/StockValue";
import Stocks from "../components/Stocks";
import Wallet from "../components/Wallet";
import Investment from "../components/Investment";

const DashBoard = () => {
  const [stocks, setStocks] = useState([]);
  const [user, setUser] = useState({});

  const fetchStock = () => {
    Cryptos.getCryptos().then((cryptos) => setStocks(cryptos));
  };
  const fetchUser = () => {
    UserService.getUsers().then((users) => setUser(users[0]));
  };
  useEffect(() => {
    fetchStock();
    fetchUser();
  }, []);
  if (!user || !stocks) {
    return null;
  }

  const addRemoveCash = (event) => {
    event.preventDefault();
    const amount = event.target.amount.value;
    const newObj = {
      ...user,
    };
    newObj.cash += Number(amount);
    setUser(newObj);
    UserService.updateUser(newObj);
  };

  const buySellCrypto = (event) => {
    const amount = event.target.amount.value;
    const id = event.target.id.value;
    const buyCrypto = Cryptos.getCrypto(id);
    const cost = buyCrypto.currentPrice * amount;
    const newUser = {
      ...user,
    };
    newUser.portfolio.push(buyCrypto);
    newUser.cash -= Number(cost);
    UserService.updateUser(newUser);
  };

  return (
    <>
      <Portfolio user={user} stocks={stocks} />
      <StockValue user={user} stocks={stocks} />
      <Wallet user={user} addRemoveCash={addRemoveCash} />
      <Investment user={user} />
    </>
  );
};

export default DashBoard;
