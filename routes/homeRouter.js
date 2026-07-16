const { Router } = require("express");
const messages = require("../messages");
const homeRouter = Router();
const messageController = require("../controllers/messageController")



homeRouter.get("/", messageController.getMessages);



module.exports = homeRouter;