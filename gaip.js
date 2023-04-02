$(document).ready(function () {
  function checkInputValue(input) {
    if (input.val() === '') {
      input.next('.error_box').css('display', 'block');
    } else {
      input.next('.error_box').css('display', 'none');
    }
  }

  // blur 이벤트에 반응하여 input 요소에서 포커스가 벗어날 때마다 checkInputValue 함수 실행
  $('#id, #pswd1, #password, #email').on('blur', function () {
    //밑에 빨간줄로 경고메세지 표기
    // if(해당 필드의 데이터 Lengnth){

    checkInputValue($(this));
  });
});

$('#join-btn').click(function (event) {
  event.preventDefault(); // 버튼의 기본 동작을 막음
  checkInputValues();
});

//회원가입 버튼
function clickRegister() {
  //event.preventDefault(); // 버튼의 기본 동작을 막음
  checkInputValues();
}

function checkInputValues() {
  var isValid = true;

  // 각 input 요소의 값이 올바르게 입력되었는지 확인하는 코드

  if (isValid) {
    window.location.href = 'index.html';
  }
}
// 비밀번호 확인 체크
/*    if (input.attr('id') === 'password') {
      var pswd1 = $('#pswd1').val();
      var pswd2 = $('#password').val();
      if (pswd1 !== pswd2) {
        $('#pw2Msg').css('display', 'block');
      } else {
        $('#pw2Msg').css('display', 'none');
      }
    }
  }

  $('#id, #pswd1, #password, #email').on('input', function () {
    checkInputValue($(this));
  });
  const loginBtn = document.getElementById('login-btn');
  loginBtn.addEventListener('click', function (event) {
    event.preventDefault(); // 기본 이벤트 취소
    // 로그인 처리 코드 작성
  });
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // 기본 이벤트 취소
    // 로그인 처리 코드 작성
  });
});
*/
// 입력 칸 값 변경 시 호출될 함수 등록
//  $("#id, #pswd1, #password, #email").on("input", function() {
//    checkInputValue($(this));
//  });

// 입력 칸 값 체크 함수
//  function checkInputValue(input) {
//    if (input.val() === "") {
//      input.next(".error_box").css("display", "block");
//    } else {
//      input.next(".error_box").css("display", "none");
//    }
//  }
