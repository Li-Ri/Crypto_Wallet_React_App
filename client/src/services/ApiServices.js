const fetch = require("node-fetch");

const baseUrl = "http://localhost:5000/api/cryptos/";

export const getCryptos = () => {
  return fetch(baseUrl).then((res) => res.json());
};

export const showCrypto = (crypto) => {
  return fetch(baseUrl + crypto._id).then((res) => res.json());
};
