const express = require("express");
const cors = require("cors");
const scheduleRoutes = require("./routes/scheduleRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/schedule", scheduleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
