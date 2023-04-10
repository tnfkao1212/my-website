<?php
// 데이터베이스 연결 정보
$servername = "test"; // MySQL 서버 이름
$username = "root"; // MySQL 사용자 이름
$password = "tkddn1212!"; // MySQL 사용자 비밀번호
$dbname = "test.people"; // 사용할 데이터베이스 이름

// MySQL 서버에 연결
$conn = new mysqli($servername, $username, $password, $dbname);

