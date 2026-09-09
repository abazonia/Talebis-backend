const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.json({ status: "ok", service: "Talebis API" }));
app.get("/health", (req, res) => res.json({ status: "ok", service: "Talebis API" }));

app.listen(PORT, () => console.log(`Talebis API running on port ${PORT}`));