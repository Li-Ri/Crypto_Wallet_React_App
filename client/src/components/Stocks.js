import React, { useState, useEffect } from "react";
import CryptoItem from "./CryptoItem";
import { Cryptos } from "../services/ApiServices";
import NavBar from "../components/NavBar";
const Stocks = () => {
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
    fetchStockData();
  }, []);
  let StocksItems;
  if (stocks) {
    StocksItems = stocks.map((stock, index) => {
      return <CryptoItem stock={stock} key={index} />;
    });
  }
  return (
    <div>
      <NavBar />
      <p>{StocksItems}</p>
    </div>
  );
};

export default Stocks;
