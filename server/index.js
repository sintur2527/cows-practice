const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');

const app = express();

app.use(bodyParser.json());
app.use(express.static('../client'));

// app.get('/', (req, res) => {
//   res.send();
// });

app.get('/api/cows', (req, res) => {
  db.query('SELECT * from cows', (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result);
    }
  });
});

app.post('/api/cows', (req, res) => {
  var { name, description } = req.body;
  db.query(
    `INSERT INTO cows (name, description) VALUES (?, ?)`,
    [name, description],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(req.body);
      }
    }
  );
});

app.listen(8000);
