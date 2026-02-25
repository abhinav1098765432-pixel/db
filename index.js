const express = require('express');
const db = require('./db');

const app = express();

app.get('/users', (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).json({ error: err.message });
    }  

    // 👇 Console me print hoga
    console.log("Users data:", results); 
 
    // 👇 Browser me JSON milega 
    res.json(results);
  });
});

app.listen(3000, () => {    
  console.log("Server running on port 3000");
});
