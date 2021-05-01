const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_route.js");

MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    const db = client.db("crypto_db");
    const cryptosCollection = db.collection("cryptos");
    // const cryptosRouter = createRouter(cryptosCollection)
    // app.use('api/cryptos', cryptosRouter)
  })
  .catch((err) => console.error(err));

app.listen(5000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
