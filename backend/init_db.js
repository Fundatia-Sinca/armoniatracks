const db = require("./models/db");

const initDb = () => {
  const createTableSql = `
    CREATE TABLE IF NOT EXISTS schedule (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      teacher_name TEXT NOT NULL,
      student_name TEXT NOT NULL,
      day INTEGER NOT NULL,
      month INTEGER NOT NULL,
      hour TEXT NOT NULL,
      camera TEXT NOT NULL
    );
  `;

  db.run(createTableSql, (err) => {
    if (err) {
      console.error("Error creating table:", err.message);
    } else {
      console.log("Table created successfully.");
    }
    db.close();
  });
};

initDb();
