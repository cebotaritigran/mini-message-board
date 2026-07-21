const { Router } = require("express");

const homeRouter = Router();
const messageController = require("../controllers/messageController")



homeRouter.get("/", messageController.getMessages);



module.exports = homeRouter;