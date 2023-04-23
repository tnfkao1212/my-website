const express = require('express');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tkddn1212!',
  database: 'test',
  port: 3306,
});

app.post('/login', (req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;

  connection.query(
    'SELECT * FROM test WHERE id = ? AND pw = ?',
    [id, pw],
    (error, results, fields) => {
      if (error) throw error;

      if (results.length > 0) {
        res.cookie('user_id', id);
        res.redirect('/index.html');
      } else {
        res.status(401).send('Unauthorized');
      }
    }
  );
});

app.get('/index.html', (req, res) => {
  const user_id = req.cookies.user_id;
  if (!user_id) {
    res.redirect('/login.html');
  } else {
    res.sendFile(path.join(__dirname, 'index.html'));
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
