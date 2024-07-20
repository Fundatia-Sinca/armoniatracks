const scheduleService = require("../services/scheduleService");

const getSchedules = (req, res) => {
  scheduleService.getAllSchedules((err, schedules) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json({
        message: "success",
        data: schedules,
      });
    }
  });
};

const createSchedule = (req, res) => {
  const newSchedule = req.body;
  scheduleService.addSchedule(newSchedule, (err) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json({
        message: "success",
        data: newSchedule,
      });
    }
  });
};

module.exports = { getSchedules, createSchedule };
