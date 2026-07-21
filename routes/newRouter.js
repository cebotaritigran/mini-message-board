// routes/newRouter.js
const { Router } = require("express");
const messageController = require("../controllers/messageController")
const newRouter = Router();

const { body } = require("express-validator");

const validateUser = [
  body("username")
    .trim()
    .isAlpha()
    .withMessage("username must only contain letters")
    .isLength({ min: 1, max: 10 })
    .withMessage("username must be between 1 and 10 characters")
];


newRouter.get("/", (req, res) => {
  res.render("form", { text: "this is new" });
});


newRouter.post("/",validateUser, messageController.createMessage);

module.exports = newRouter;

