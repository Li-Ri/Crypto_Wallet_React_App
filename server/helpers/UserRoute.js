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
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json({
          status: 500,
          error: err,
        });
      });
  });

  // get specific user
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json({
          status: 500,
          error: err,
        });
      });
  });

  router.post("/", (req, res) => {
    const user = req.body;
    collection
      .insertOne(user)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  });
  // update Specific User
  router.put("/:id", (req, res) => {
    const updated = req.body;
    const id = req.params.id;
    delete updated._id;
    collection
      .updateOne({ _id: ObjectID(id) }, { $set: updated })
      .then((updateUser) => res.json(updateUser))
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json({
          status: 500,
          error: err,
        });
      });
  });

  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectID(id) })
      .then((results) => res.json(results))
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json({
          status: 500,
          error: err,
        });
      });
  });
  return router;
};

module.exports = UserRoute;
