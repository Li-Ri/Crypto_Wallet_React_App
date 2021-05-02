const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const ApiRouter = require("./helpers/ApiRoute.js");
const UserRouter = require("./helpers/UserRoute.js");
const cors = require("cors");
app.use(cors());
app.use(express.json());

MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    const db = client.db("crypto_db");
    const cryptosCollection = db.collection("cryptos");
    const userCollection = db.collection("users");
    const cryptosRouter = ApiRouter(cryptosCollection);
    const userRouter = UserRouter(userCollection);
    app.use("/api/cryptos", cryptosRouter);
    app.use("/api/users", userRouter);
  })
  .catch((err) => console.error(err));

app.listen(5000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
