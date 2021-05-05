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
import fetch from "node-fetch";
import env from 'react-dotenv'

const DashBoard = () => {
  const [stocks, setStocks] = useState([]);
  const [user, setUser] = useState({});
 

  const fetchUser = () => {
    UserService.getUsers().then((users) => setUser(users[0]));
  };

const fetchStockData = async () => {
    const cryptos = [
      "ETH",
      "BTC",
      "DASH",
      "LTC",
      "BCH",
      "NEO",
      "EOS",
      "BTG",
      "XMR",
      "DASH",
      "BTG",
    ];
    const finalArr = [];

    const stocksFinal = [];
    for (const crypto of cryptos) {
      const new_object = {
        name: "",
        symbol: "",
        currentPrice: 0,
        history: [],
        priceChange: 0,
      };
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${crypto}&tsym=USD&limit=50&apikey=73d9942c2e64587f8d08f7b28057a8cf20c35fb6e7b7dd401d5ed7ad3d0a9fbe`
      );
      const json = await response.json();
      const responseFinage = await fetch(
        `https://api.finage.co.uk/last/crypto/detailed/${crypto.toLowerCase()}usd?apikey=API_KEY09COSHVGIAFJRSHBZFFM71RUY6GJ1NVQ`
      );
      const jsonFinage = await responseFinage.json();
      new_object.name = await jsonFinage.name;
      new_object.symbol = await jsonFinage.symbol;
      new_object.currentPrice = await json.Data.Data[0].close;
      new_object.priceChange = await jsonFinage.changesPercentage;
      new_object.history = await json.Data.Data;
      stocksFinal.push(new_object);
    }
    setStocks(stocksFinal);
  };
  useEffect(() => {
    fetchUser();
    fetchStockData();
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
    const name = event.target.id.value;
    const cryptoObj = stocks.find((stock) => stock.name == name);
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

    event.target.reset();
  };

  const sellStock = (event) => {
    event.preventDefault();
    const name = event.target.id.value;
    const amount = event.target.amount.value;
    const cryptoObj = stocks.find((stock) => stock.name == name);
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

