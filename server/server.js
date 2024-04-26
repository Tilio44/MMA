const express = require("express");
const path = require("path");
const app = express();

// Serve the static files of the React app
app.use(express.static(path.join(__dirname, "client", "src")));

// Endpoint to serve the login page
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "src", "login.jsx"));
});

// API endpoint to provide user data
app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2"] });
});

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
