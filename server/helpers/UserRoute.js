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

  // get specific user
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
      });
  });

  // update Specific User
  router.put("/:id", (req, res) => {
    const updated = req.body;
    const id = req.params.id;
    delete updated._id;
    collection
      .updateOne({ _id: ObjectID(id) }, { $set: updated })
      .then((updateUser) => res.json(updateUser));
  });

  return router;
};

module.exports = UserRoute;
