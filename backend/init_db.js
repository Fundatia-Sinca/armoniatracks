import { run, close } from "./db";

const initDb = () => {
  const createTableSql = `
        CREATE TABLE IF NOT EXISTS example_table (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            age INTEGER
        );
    `;

  run(createTableSql, (err) => {
    if (err) {
      console.error("Error creating table:", err.message);
    } else {
      console.log("Table created successfully.");
    }
    close();
  });
};

initDb();
