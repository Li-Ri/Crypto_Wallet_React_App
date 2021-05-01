require("dotenv").config({ path: "../.env" });
const axios = require("axios");

const finage_key = `https://api.finage.co.uk/last/crypto/detailed/btcusd?apikey=${process.env.API_KEY_FINAGE}`;
const alpha = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=BTC&interval=5min&api=${process.env.API_KEY_ALPHAVANTAGE}`;

const getApi = (url) => {
  return axios.get(url);
};

Promise.all([getApi(finage_key), getApi(alpha)]).then((results) => {
  const finage = results[0];
  const alpha = results[1];
});

export default getCryptos;
