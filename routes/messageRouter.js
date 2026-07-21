// routes/messageRouter.js
const { Router } = require("express");
const messageController = require("../controllers/messageController")

const messageRouter = Router();


messageRouter.get("/:id",messageController.getMessageByID );
messageRouter.post("/:id/delete",messageController.deleteMessageByID );
messageRouter.get("/search/:search", messageController.searchByUsername);

module.exports = messageRouter;

