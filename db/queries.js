const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageByID(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return rows[0];
}

async function deleteMessageByID(id) {
  const { rows } = await pool.query("DELETE FROM messages WHERE id = $1", [id]);
  return rows > 0;
}

async function createMessage(username, text) {
  await pool.query(
    "INSERT INTO messages (username, message) VALUES ($1, $2)",
    [username, text]
  );
}


async function searchByUsername(username) {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE username ILIKE $1",
    [`%${username}%`]
  );

  return rows;
}

// async function insertUsername(username) {
//   await pool.query("INSERT INTO username (username) VALUES ($1)", [username]);
// }

// async function deleteUsername() {
//   await pool.query("DELETE FROM username");
// }

module.exports = {
  getAllMessages,
  getMessageByID,
  deleteMessageByID,
  createMessage,
  searchByUsername
};
