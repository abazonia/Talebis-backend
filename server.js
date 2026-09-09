const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.json({ status: "ok", service: "Talebis API" }));
app.get("/health", (req, res) => res.json({ status: "ok", service: "Talebis API" }));
const MOCK_USERS = [
  { id: 1, name: "Adaeze Okonkwo", email: "adaeze@gmail.com", role: "student", plan: "premium", xp: 7800, status: "active", lastLogin: "Today" },
  { id: 2, name: "Emeka Nwosu", email: "emeka@gmail.com", role: "employer", plan: "free", xp: 0, status: "suspended", lastLogin: "1 week ago" }
];

app.get("/api/admin/stats", (req, res) => {
  res.json({
    totalUsers: MOCK_USERS.length,
    students: MOCK_USERS.filter(u => u.role === "student").length,
    employers: MOCK_USERS.filter(u => u.role === "employer").length,
    activeSubscriptions: MOCK_USERS.filter(u => u.plan === "premium").length,
    monthlyRevenue: 7500,
    newUsersToday: 0,
    aiCallsToday: 0
  });
});

app.get("/api/admin/users", (req, res) => {
  res.json({ users: MOCK_USERS });
});
app.listen(PORT, () => console.log(`Talebis API running on port ${PORT}`));