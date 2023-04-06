<?php
// MySQL 데이터베이스 연결 설정
$servername = "localhost"; // MySQL 서버 이름
$username = "root"; // MySQL 사용자 이름
$password = "tkddn1212"; // MySQL 사용자 비밀번호
$dbname = "test"; // MySQL 데이터베이스 이름

$conn = new mysqli($servername, $username, $password, $dbname); // MySQL 데이터베이스 연결

// MySQL 연결 오류가 발생한 경우
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// POST로 전송된 회원 가입 입력 데이터를 변수에 저장
$id = $_POST['id'];
$pw = $_POST['pw'];
$pwCheck = $_POST['pwCheck'];
$name = $_POST['name'];
$email = $_POST['email'];

// MySQL 삽입 쿼리 실행
$sql = "INSERT INTO members (id, password, name, email)
VALUES ('$id', '$pw', '$name', '$email')";

// MySQL 쿼리 실행 결과 처리
if ($conn->query($sql) === TRUE) {
  echo "회원 가입이 완료되었습니다.";
} else {
  echo "오류: " . $sql . "<br>" . $conn->error;
}

// MySQL 데이터베이스 연결 종료
$conn->close();
?>