const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Save data in a simple JSON file
const DATA_FILE = "./data.json";

// Fetch all entries
app.get("/api/entries", (req, res) => {
  // Create file if missing
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "[]");
  }
  //read it as text file
  const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  res.json(data);
});

// Add a new entry
app.post("/api/entries", (req, res) => {
  const { emotion, note, timestamp } = req.body;

  if (!emotion || !note || !timestamp) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const existingData = fs.existsSync(DATA_FILE)
    ? JSON.parse(fs.readFileSync(DATA_FILE, "utf8"))
    : [];

  const newEntry = {
    id: Date.now(),
    emotion,
    note,
    timestamp,
  };

  existingData.push(newEntry);

  fs.writeFileSync(DATA_FILE, JSON.stringify(existingData, null, 2));

  res.json({ success: true, entry: newEntry });
});

// Server
app.listen(5000, () => console.log("Server running on port 5000"));
