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
import NavBar from "../components/NavBar";
import Login from "../components/Login";

const DashBoard = ({ user, setUser }) => {
  const [stocks, setStocks] = useState([]);

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
        `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${crypto}&tsym=USD&limit=50&apikey=59b35b675652b662e60f90181e3945c0f2919ca3b6d69752979393c9805c608a`
      );
      const json = await response.json();
      const responseFinage = await fetch(
        `https://api.finage.co.uk/last/crypto/detailed/${crypto.toLowerCase()}usd?apikey=API_KEY3578X2QWUM2W8WYIUX4ZDXLIYJPKFBK3`
      );
      const jsonFinage = await responseFinage.json();
      new_object.name = jsonFinage.name;
      new_object.symbol = jsonFinage.symbol;
      new_object.currentPrice = json.Data.Data[0].close;
      new_object.priceChange = jsonFinage.changesPercentage;
      new_object.history = json.Data.Data;
      stocksFinal.push(new_object);
    }
    setStocks(stocksFinal);
  };

  useEffect(() => {
    fetchStockData();
  }, []);

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
    const cost = cryptoObj ? cryptoObj.currentPrice * amount : 0;
    const newUser = {
      ...user,
    };

    if (!cryptoObj || newUser.cash < cost) {
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
    if (!cryptoObj || amount > newUser.stock_units[cryptoObj.symbol]) {
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
      <NavBar />
      <h1 data-testid="dashboard-title" id="main-title">
        DashBoard
      </h1>
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
