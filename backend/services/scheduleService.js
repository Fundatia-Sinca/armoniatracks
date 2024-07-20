const db = require("../models/db");

const getAllSchedules = (callback) => {
  const sql = "SELECT * FROM schedule";
  db.all(sql, [], (err, rows) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, rows);
    }
  });
};

const addSchedule = (schedule, callback) => {
  const sql = `
    INSERT INTO schedule (teacher_name, student_name, day, month, hour, camera)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const params = [
    schedule.data.teacher_name,
    schedule.data.student_name,
    schedule.data.day,
    schedule.data.month,
    schedule.data.hour,
    schedule.data.camera,
  ];

  console.log(params, "params in services");

  db.run(sql, params, function (err) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, { id: this.lastID, ...schedule });
    }
  });
};

module.exports = { getAllSchedules, addSchedule };
