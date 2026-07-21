const db = require("../db/queries");
const { body, validationResult } = require("express-validator");



async function getMessages(req, res) {
    const messages = await db.getAllMessages();
    console.log("Messages: ", messages);
    res.render("index", { messages: messages });
}

async function getMessageByID(req, res) {
    const { id } = req.params;
    const selectedMessage = await db.getMessageByID(id);
    res.render("message", { selectedMessage: selectedMessage });
}

async function deleteMessageByID(req, res) {
    const { id } = req.params;
    // console.log("DELETE ROUTE HIT", req.params);
    console.log("Deleted", id);
    await db.deleteMessageByID(id);

    res.redirect("/");
}


async function createMessage(req, res) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).render("form", {
            errors: errors.array(),
        });
    }

    const { username, message } = req.body;

    await db.createMessage(username, message);

    res.redirect("/");
}









// async function createMessage(req, res) {
//     const { username, message } = req.body;


//     await db.createMessage(username, message);

//     res.redirect("/");

// }

async function searchByUsername(req, res) {
    const { search } = req.params;

    const messages = await db.searchByUsername(search);

    console.log(messages);

    res.render("message", { selectedMessage: messages[0] });
}



module.exports = {
    getMessages,
    getMessageByID,
    deleteMessageByID,
    createMessage,
    searchByUsername
};
