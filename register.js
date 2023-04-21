const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tkddn1212!',
  database: 'test',
  port: '3306',
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;
  const name = req.body.name;
  const email = req.body.email;

  // 회원가입 정보 저장
  const regist_dat = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const level = 1;
  const point = 0;

  connection.query(
    'INSERT INTO test (id, pw, name, email, regist_dat, level, point) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [id, pw, name, email, regist_dat, level, point],
    (error, results, fields) => {
      if (error) throw error;
      res.status(200).send('Success');
    }
  );
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
