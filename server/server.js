const express = require('express');
const app = express();
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");
const data = require("./data.json");

app.use(express.json());

let db = new sqlite3.Database("./BDD/mma.sqlite", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the mma.sqlite database.");
});

app.post("/register", (req, res) => {
  const { name, lastname, email, password } = req.body;

  db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, row) => {
    if (err) {
      return console.log(err.message);
    }
    if (row) {
      res.json({
        success: false,
        message: "Cette adresse e-mail est déjà prise",
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      db.run(
        `INSERT INTO users (name, lastname, email, password) VALUES (?, ?, ?, ?)`,
        [name, lastname, email, hashedPassword],
        function (err) {
          if (err) {
            return console.log(err.message);
          }
          res.json({ success: true });
        }
      );
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, row) => {
    if (err) {
      return console.log(err.message);
    }
    if (row) {
      const match = await bcrypt.compare(password, row.password);
      if (match) {
        res.json({ success: true });
      } else {
        res.json({ success: false, message: "Mot de passe incorrect" });
      }
    } else {
      res.json({ success: false, message: "Email non trouvé" });
    }
  });
});

app.get("/home", (req, res) => {
  res.send("Bienvenue sur le site de paris sportif 100% UFC");
});

app.get("/events", (req, res) => {
  res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
