require("dotenv").config({ path: "../.env" });
const axios = require("axios");
const fetch = require("node-fetch");
const MongoClient = require("mongodb").MongoClient;
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

const open = [];
const low = [];
const high = [];
const close = [];
const volume = [];

for (crypto of cryptos) {
  const finage = `https://api.finage.co.uk/last/crypto/detailed/${crypto.toLowerCase()}usd?apikey=${
    process.env.API_KEY_FINAGE
  }`;
  const alpha = `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${crypto}&tsym=USD&limit=50&apikey=73d9942c2e64587f8d08f7b28057a8cf20c35fb6e7b7dd401d5ed7ad3d0a9fbe`;

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
    console.log(results[1]);
    new_object.history = results[1].data.Data.Data;
    MongoClient.connect("mongodb://localhost:27017")
      .then((client) => {
        const db = client.db("crypto_db");
        const cryptosCollection = db.collection("cryptos");
        cryptosCollection.insertOne(new_object);
      })
      .catch((err) => console.error(err));
  });
}
