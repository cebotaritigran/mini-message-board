// routes/messageRouter.js
const { Router } = require("express");
const messages = require("../messages");

const newRouter = Router();


newRouter.get("/", (req, res) => {
  res.render("form", { text: "this is new" });
});

let counter = 0;
newRouter.post("/", (req, res) => {
  const { id = counter++, message, author, date = new Date() } = req.body;
  messages.push({ id: id, message: message, author: author, date: date });

  res.redirect("/")
});

module.exports = newRouter;

