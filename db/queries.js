const pool = require("./pool");

// async function getAllUsernames() {
//   const { rows } = await pool.query("SELECT * FROM messages");
//   return rows;
// }

// async function searchUser(username) {
//   const { rows } = await pool.query(
//     "SELECT * FROM username WHERE username ILIKE $1",
//     [`%${username}%`]
//   );

//   return rows;
// }

// async function insertUsername(username) {
//   await pool.query("INSERT INTO username (username) VALUES ($1)", [username]);
// }

// async function deleteUsername() {
//   await pool.query("DELETE FROM username");
// }

// module.exports = {
//   searchUser,
//   deleteUsername,
//   getAllUsernames,
//   insertUsername
// };
