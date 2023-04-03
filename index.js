function clickBoard(boardNumber) {
  if (boardNumber == 1) {
    // 자유게시판
    window.location.href = '게사판';

    window.location.href = '자유 게시판/free_list.html';
  } else if (boardNumber == 2) {
    //아프리카
    window.location.href = '아프리카/af_list.html';
  } else if (boardNumber == 3) {
    //트위치
    window.location.href = '트위치 게시판/tw_list.html';
  }
}
