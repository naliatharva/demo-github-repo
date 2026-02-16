const express = require('express');
const mysql = require('mysql8');

const app = express();

const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'testdb'
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected!");
});

app.get('/', (req, res) => {
  res.send("Docker Compose Multi Container Working!");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
