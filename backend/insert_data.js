import { run, close } from "./db";

const insertData = () => {
  const sql = `
        INSERT INTO example_table (name, age) VALUES
        ('John Doe', 34),
        ('Jane Doe', 28),
        ('Alice', 45),
        ('Bob', 23),
        ('Charlie', 67),
        ('David', 19),
        ('Eve', 39),
        ('Frank', 51);
    `;

  run(sql, function (err) {
    if (err) {
      return console.error("Error inserting data:", err.message);
    }
    console.log(`Rows inserted ${this.changes}`);
    close();
  });
};

insertData();
