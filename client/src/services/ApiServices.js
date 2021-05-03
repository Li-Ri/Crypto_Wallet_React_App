const fetch = require("node-fetch");
const baseUrl = "http://localhost:5000/api/cryptos/";
export const Cryptos = {
  getCryptos: () => {
    return fetch(baseUrl).then((res) => res.json());
  },
  showCrypto: (crypto) => {
    return fetch(baseUrl + crypto._id).then((res) => res.json());
  },
};
