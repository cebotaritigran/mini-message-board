#! /usr/bin/env node
require("dotenv").config();
console.log(process.env.DATABASE_URL);
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
        connectionString: process.env.DATABASE_PUBLIC_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
