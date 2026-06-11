const { Router } = require("express");
const messages = require("../messages");
const homeRouter = Router();



homeRouter.get("/", (req, res) => {
    res.render("index", { messages: messages, text: "this is homepage" });
});



module.exports = homeRouter;