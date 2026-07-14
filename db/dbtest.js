const { Pool } = require("pg");

require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_PUBLIC_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function testConnection() {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Database connected!");
    console.log(result.rows);
  } catch (error) {
    console.error("Connection failed:");
    console.error(error);
  } finally {
    await pool.end();
  }
}

testConnection();