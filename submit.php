<?php
// 데이터베이스 연결 정보
$servername = "localhost:3306"; // MySQL 서버 이름
$username = "root"; // MySQL 사용자 이름
$password = "tkddn1212!"; // MySQL 사용자 비밀번호
$dbname = "test"; // 사용할 데이터베이스 이름

// MySQL 서버에 연결
$conn = new mysqli($servername, $username, $password, $dbname);

// 연결 오류 확인
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// POST로 전달된 회원가입 폼 데이터 받기
$name = $_POST['id'];
$password = $_POST['password'];
$name = $_POST['name'];
$email = $_POST['email'];

// SQL 쿼리 작성
$sql = "INSERT INTO users (id, password, name, email) VALUES ('$id', '$password', '$name', '$email')";

// 쿼리 실행
if ($conn->query($sql) === TRUE) {
    
echo "회원가입이 완료되었습니다.";
} 
else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// MySQL 연결 닫기
$conn->close();
?>

