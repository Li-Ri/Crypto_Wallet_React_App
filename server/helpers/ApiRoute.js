const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const ApiRouter = (collection) => {
  const router = express.Router();

  //   get all cryptos from database
  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  //GET - SPECIFIC

  router.get("/:id", (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
    // Post new crypto to database
    router.post("/", (req, res) => {
      const newData = req.body;
      collection
        .insertOne(newData)
        .then((result) => res.json(result))
        .catch((err) => {
          console.error(err);
          res.status(500);
          res.json({ status: 500, error: err });
        });
    });
  });

  return router;
};

module.exports = ApiRouter;
