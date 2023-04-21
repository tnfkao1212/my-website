const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

// 이후 로그인 처리 등 코드 작성

// index.html 파일 내에서 로그인 상태를 유지하는 코드

// 쿠키에서 userId 가져오기
const userId = getCookie('user_id');

// userId 쿠키가 존재하는 경우
if (userId) {
  // 로그인 상태 유지 작업 수행
  // 예: 로그인 상태로 화면 내부 요소들을 보여준다거나,
  //     로그인 상태를 나타내는 아이콘을 표시한다거나 등등
}

function getCookie(name) {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
}

function init() {
  const userId = getCookie('user_id');
  if (userId) {
    showLoggedInPage();
  }
}

function showLoggedInPage() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('loggedInPage').style.display = 'block';
}

function getCookie(name) {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
}

function login() {
  const id = document.getElementById('id').value;
  const pw = document.getElementById('pw').value;

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, pw }),
  })
    .then((response) => {
      if (response.ok) {
        showLoggedInPage();
      } else {
        alert('로그인에 실패했습니다.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

document.getElementById('loginBtn').addEventListener('click', login);

init();
