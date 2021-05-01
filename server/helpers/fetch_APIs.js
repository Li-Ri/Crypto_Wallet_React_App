require("dotenv").config({ path: "../.env" });
const axios = require("axios");
const MongoClient = require("mongodb").MongoClient;
const finage = `https://api.finage.co.uk/last/crypto/detailed/ethusd?apikey=${process.env.API_KEY_FINAGE}`;
const alpha = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=ETH&interval=5min&apikey=${process.env.API_KEY_ALPHAVANTAGE}`;

const getApi = (url) => {
  return axios.get(url);
};

const new_object = {
  name: "",
  symbol: "",
  currentPrice: 0,
  history: [],
  priceChange: 0,
};

Promise.all([getApi(finage), getApi(alpha)]).then((results) => {
  new_object.name = results[0].data.name;
  new_object.symbol = results[0].data.symbol;
  new_object.currentPrice = results[0].data.price;
  new_object.priceChange = results[0].data.changesPercentage;
  MongoClient.connect("mongodb://localhost:27017")
    .then((client) => {
      const db = client.db("crypto_db");
      const cryptosCollection = db.collection("cryptos");
      cryptosCollection.insertOne(new_object);
    })
    .catch((err) => console.error(err));
});
