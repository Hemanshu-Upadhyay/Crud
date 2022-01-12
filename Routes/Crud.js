const express = require("express");
const router = express.Router();
const User = require('../model/UserModel');
const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.send("User Route Health Check");
});

router.post("/Create", (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
  });
  user
    .save()
    .then(() => {
      res.send("User Created");
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/GetallUsers", (req, res) => {
  User.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/DeleteUser", (req, res) => {
  const id = req.query.id;
  User.findByIdAndDelete(id)
    .then(() => {
      res.send("User Deleted");
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/UpdateUser", (req, res) => {
    const id = req.query.id;
    User.findByIdAndUpdate(id, {
        name: req.body.name,
        email: req.body.email,
    })
        .then(() => {
        res.send("User Updated");
        })
        .catch((err) => {
        res.send(err);
        });
})



module.exports = router;
