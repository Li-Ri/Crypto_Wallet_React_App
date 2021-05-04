import React, {useState, useEffect} from "react";
import CryptoItem from "./CryptoItem";
import {Cryptos} from '../services/ApiServices'

const Stocks = () => {

  const [stocks, setStocks] = useState([]);

  const fetchStock = () => {
    Cryptos.getCryptos().then((cryptos) => setStocks(cryptos));
  };
  
  useEffect(() => {
    fetchStock();
  }, [])
  let StocksItems;
if (stocks){
  StocksItems = stocks.map((stock, index) => {
    return <CryptoItem stock = {stock} key = {index} />
  })
}
    return(
      <div>
        <p>{StocksItems}</p>
      </div>
    );
  }





export default Stocks;
