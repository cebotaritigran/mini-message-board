// routes/messageRouter.js
const { Router } = require("express");
const messages = require("../messages");

const messageRouter = Router();


messageRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    let selectedMessage = messages[id];
    res.render("message", { selectedMessage: selectedMessage });
});

module.exports = messageRouter;

