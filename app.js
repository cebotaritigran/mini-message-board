// app.js
const express = require("express");
const app = express();
const path = require("node:path");
require("dotenv").config();

//routers
const homeRouter = require('./routes/homeRouter');
const newRouter = require('./routes/newRouter');
const messageRouter = require("./routes/messageRouter");



// styles
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// client side set up for ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }));

app.use('/', homeRouter);
app.use('/new', newRouter)
app.use('/message', messageRouter)


const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on", PORT);
});

require("dotenv").config();
const { Client } = require("pg");

const SQL = `
INSERT INTO messages (username, message)
VALUES
  ('Alice', 'Hello, everyone!'),
  ('Bob', 'Welcome to the message board.'),
  ('Charlie', 'This project is awesome!'),
  ('Diana', 'Hope you have a great day!'),
  ('Ethan', 'PostgreSQL is working!');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
