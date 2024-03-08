const express = require("express");
const { Person } = require("../Schema/schema");

const route = express.Router();

route.get("/login", (req, res) => {
  res.send("LOGIN");
});

route.post("/update/:id", async function (req, res) {
  const { id } = req.params;
  const { title,author,body } = req.body;

  try {
    await Person.findByIdAndUpdate(id, { $set: { title: title ,author:author,body:body} });
    res.send({
      status: true,
    });
  } catch (error) {
    res.status(404).send({ status: false });
  }
});
route.get("/delete/:id", async function (req, res) {
  const { id } = req.params;

  try {
    await Person.findByIdAndDelete(id);
    res.send({
      status: true,
    });
  } catch (error) {
    res.status(404).send({ status: false });
  }
});

route.post("/post", function (req, res) {
  const { title, author, body } = req.body;
  const person = new Person({ title: title, author: author, body: body });
  if (title != null && author != null && body != null) {
    person.save();
    res.status(202).send({
      status: true,
      person,
    });
  } else {
    res.status(404).send({ status: false });
  }
});

route.get("/user", async (req, res) => {
  const person = await Person.find().select({title:1,body:1,author:1},);

  res.send({
    status: true,
    users: person,
  });
});

module.exports = route;
