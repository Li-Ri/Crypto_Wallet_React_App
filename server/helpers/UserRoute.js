const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const UserRoute = function (collection) {
  const router = express.Router();

  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then((users) => {
        res.json(users);
      })
      .catch((err) => console.log(err));
  });

  return router;
};

module.exports = UserRoute;
