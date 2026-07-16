const db = require("../db/queries");

async function getMessages(req, res) {
    const messages = await db.getAllMessages();
    console.log("Messages: ", messages);
    res.send("messages: " + messages);
}

async function searchUsernames(req, res) {
    const { search } = req.query;

    const usernames = await db.searchUser(search);

    res.send(
        "Usernames: " + usernames.map(user => user.username).join(", ")
    );
}

async function createUsernameGet(req, res) {
    // render the form

    res.render("form")
    console.log("usernames will be entered here - wip")

}

async function createUsernamePost(req, res) {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
}

async function deleteUsernames(req, res) {
     const usernames = await db.deleteUsername();
    console.log("database deleted");
    res.redirect("/");
}

module.exports = {
    getUsernames,
    deleteUsernames,
    searchUsernames,
    createUsernameGet,
    createUsernamePost
};
