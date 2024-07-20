import { run, close } from "./db";

// Function to insert sample data into the schedule table
const insertData = () => {
  const sql = `
    INSERT INTO schedule (teacher_name, student_name, day, month, hour, camera) VALUES
    ('Otto', 'Taylor', 3, 4, '03:30', 'Camera 2'),
    ('Alice', 'Smith', 15, 6, '14:00', 'Camera 1'),
    ('Bob', 'Johnson', 7, 10, '09:00', 'Camera 3'),
    ('Charlie', 'Brown', 12, 2, '11:30', 'Camera 2'),
    ('David', 'Davis', 20, 8, '16:45', 'Camera 1'),
    ('Eve', 'Wilson', 25, 12, '10:00', 'Camera 3'),
    ('Frank', 'Moore', 5, 11, '13:15', 'Camera 2');
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
