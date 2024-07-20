const express = require("express");
const router = express.Router();
const scheduleController = require("../controllers/scheduleController");

router.get("/", scheduleController.getSchedules);
router.post("/add-schedule", scheduleController.createSchedule);

module.exports = router;
