const express = require("express");
const cors = require("cors");

const app = express();

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true,
  })
);

// Middleware for parsing JSON bodies
app.use(express.json());

// Basic test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Example POST route
app.post("/api/data", (req, res) => {
  const data = req.body;
  res.json({
    received: true,
    data: data,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
