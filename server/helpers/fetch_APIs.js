require("dotenv").config({ path: "../.env" });
const axios = require("axios");

const finage = `https://api.finage.co.uk/last/crypto/detailed/btcusd?apikey=${process.env.API_KEY_FINAGE}`;
const alpha = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=BTC&interval=5min&apikey=${process.env.API_KEY_ALPHAVANTAGE}`;
console.log(finage, alpha);
const getApi = (url) => {
  return axios.get(url);
};

const new_object = {
  name: "",
  symbol: "",
  currentPrice: 0,
};

Promise.all([getApi(finage), getApi(alpha)]).then((results) => {
  new_object.name = results[0].name;
  new_object.symbol = results[0].symbol;
  new_object.currentPrice = results[0].price;
});

setTimeout(() => {
  console.log(new_object);
}, 4000);
