const express = require('express'); // express 모듈을 가져옴
const app = express(); // express 애플리케이션 생성
const mysql = require('mysql'); // mysql 모듈을 가져옴
const path = require('path'); // path 모듈을 가져옴
const cors = require('cors'); // CORS 에러 방지
const bcrypt = require('bcrypt'); // bcrypt 모듈을 가져옴
const saltRounds = 10; // salt를 생성하는 데 필요한 반복 횟수를 나타냄

// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tkddn1212!',
  database: 'test',
  port: 3306,
});

app.use(express.json()); // JSON 데이터를 파싱하기 위한 미들웨어 등록
app.use(express.urlencoded({ extended: true })); // URL-encoded 데이터를 파싱하기 위한 미들웨어 등록
app.use(express.static(path.join(__dirname, 'public'))); // 정적 파일 서비스를 위한 미들웨어 등록

// CORS 에러 방지를 위한 미들웨어 등록
app.use(cors());

// POST 요청 처리를 위한 라우팅
app.post('/login', (req, res) => {
  const id = req.body.id; // 클라이언트에서 전송된 아이디
  const pw = req.body.pw; // 클라이언트에서 전송된 비밀번호

  // MySQL 데이터베이스에서 해당 아이디를 가진 사용자를 조회하는 쿼리 실행
  connection.query(
    'SELECT * FROM users WHERE id = ?',
    [id],
    (error, results, fields) => {
      if (error) {
        // 오류 발생 시
        console.log(error);
        return res.status(500).send('Error');
      }

      // 아이디에 해당하는 사용자가 없을 경우
      if (results.length === 0) {
        return res.status(404).send('User not found');
      }

      const user = results[0]; // 조회된 사용자 정보

      // bcrypt를 사용하여 비밀번호 검증
      bcrypt.compare(pw, user.pw, (err, result) => {
        if (err) {
          // 오류 발생 시
          console.log(err);
          return res.status(500).send('Error');
        }

        if (result) {
          // 비밀번호가 일치할 경우
          res.redirect('/index.html'); // '/index.html'로 리다이렉트
        } else {
          // 비밀번호가 일치하지 않을 경우
          res.status(401).send('Unauthorized');
        }
      });
    }
  );
});

// 서버 시작
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
