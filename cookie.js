var http = require('http');
var cookie = require('cookie');

http
  .createServer(function (request, response) {
    // 쿠키 생성
    response.writeHead(200, {
      'Set-Cookie': ['yummy_cookie=choco', 'tasty_cookie=strrawberry'],
    });

    // 쿠키 읽기
    var cookies = {};
    if (request.headers.cookie !== undefined) {
      cookies = cookie.parse(request.headers.cookie);
    }
    console.log(cookies);

    response.end('cookie!!');
  })
  .listen(3000);
