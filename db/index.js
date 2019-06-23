const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cows',
});

connection.connect(err => {
  if (err) {
    console.error(err);
  }
  console.log('Connected to database!');
});

module.exports = connection;
