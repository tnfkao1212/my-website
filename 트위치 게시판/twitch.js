$(document).ready(function () {
  function checkInputValue(input) {
    if (input.val() === '') {
      input.next('.error_box').css('display', 'block');
    } else {
      input.next('.error_box').css('display', 'none');
    }
  }
});
