import express, { json } from "express";
import cors from "cors";
import { all } from "./db";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/data", (req, res) => {
  const sql = "SELECT * FROM example_table";
  all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
