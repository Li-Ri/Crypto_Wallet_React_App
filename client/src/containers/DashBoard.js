import React, { useState, useEffect } from "react";
import { Cryptos } from "../services/ApiServices";
import { UserService } from "../services/UserServices";
import Portfolio from "../components/Portfolio";
import StockValue from "../components/StockValue";
import Stocks from "../components/Stocks";
import Wallet from "../components/Wallet";
import Investment from "../components/Investment";
import BuySellCrypto from "../components/BuySellCrypto";
import ProfitLoss from "../components/ProfitLoss";


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
    event.preventDefault();
    const amount = Number(event.target.amount.value);
    const id = event.target.id.value;
    const buyCrypto = Cryptos.getCrypto(id).then((cryptoObj) => {
      const newUser = {
        ...user,
      };
      const cost = cryptoObj.currentPrice * amount;
      if (newUser.cash < cost) {
        return;
      }

      if (user.stock_units[cryptoObj.symbol] !== undefined) {
        newUser.stock_units[cryptoObj.symbol] += amount;
      } else {
        newUser.portfolio.push(cryptoObj);
        newUser.stock_units[cryptoObj.symbol] = amount;
      }

      newUser.cash -= cost;
      newUser.invested += cost;
      setUser(newUser);
      UserService.updateUser(newUser);
    });
    event.target.reset();
  };

  const sellStock = (event) => {
    event.preventDefault();
    const id = event.target.id.value;
    const amount = event.target.amount.value;
    const buyCrypto = Cryptos.getCrypto(id).then((cryptoObj) => {
      const newUser = {
        ...user,
      };

      if (amount > newUser.stock_units[cryptoObj.symbol]) {
        return;
      }
      const cost = cryptoObj.currentPrice * amount;
      newUser.cash += cost;
      newUser.stock_units[cryptoObj.symbol] -= amount;
      newUser.invested -= cost;
      setUser(newUser);
      UserService.updateUser(newUser);
    });
    event.target.reset();
  };
  return (
    <>
      <div className="dash-container">
        <Portfolio user={user} stocks={stocks} />
        <div className="user-stats">
          <StockValue user={user} stocks={stocks} />
          <Wallet user={user} addRemoveCash={addRemoveCash} />
          <Investment user={user} />
          <ProfitLoss user={user} stocks={stocks} />
          {/* <Stocks stocks = {stocks}/> */}
          <BuySellCrypto
            buySellCrypto={buySellCrypto}
            stocks={stocks}
            user={user}
            sellStock={sellStock}
          />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
