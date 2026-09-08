const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.get("/", (req, res) => res.json({ status: "ok", service: "Talebis API" }));
app.get("/health", (req, res) => res.json({ status: "ok", service: "Talebis API", timestamp: new Date().toISOString() }));

app.listen(PORT, () => console.log(`Talebis API running on port ${PORT}`));
