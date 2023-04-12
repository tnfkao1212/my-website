const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'tkddn1212!',
  database: 'test',
  port: '3306',
});

connection.connect();

connection.query('SELECT * from test', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();
