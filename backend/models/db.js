const sqlite3 = require("sqlite3").verbose();
const { resolve } = require("path");

const dbPath = resolve(__dirname, "../../database/database.sqlite");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

module.exports = db;
