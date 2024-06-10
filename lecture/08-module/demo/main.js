/**
 * url 모듈은 웹주소를 읽어온다. 읽어온 내용을 구문분석하여 주소의
 * 각 부분으로 나누고 객체로 변환한다.
 */

// var addr = 'http://localhost:8000/example.html?year=2024&month=feb';
// var addr = 'http://localhost:8000/demo.htm?id=2024&pw=feb';
// 로그인 id=000 password=000
// var q = url.parse(addr, true)
// console.log(q);
// console.log(q.pathname); // 경로와 파일이름/example.htm
// console.log(q.search); // ?year=2024&month=feb
// var qdata = q.query; 
// console.log(qdata); // { ?year=2024&month=feb }
// console.log(qdata.month); // 기존쿼리에서 month에 해당하는 것만 출력


const http = require('http');
const url = require('url');
const fs = require('fs');
http.createServer(function(req,res){
    var q = url.parse(req.url, true); // 주어진 URL 문자열을 파싱해서 URL 객체를 반환, true는 query문자열을 객체로 변환, req.url => ex) summer.html
    var filename = "." + q.pathname; // "."은 현재 디렉토리, q.pathname을 현재 디렉토리에 연결해서 실제 파일 시스템 경로 생성
                                     // 문자열을 포함하지 않은 경로 부분 반환
                                     // 파싱된 URL 객체의 경로를 변수 filename에 담음
                                     // ex) /summer.html

    fs.readFile(filename, function(err, data){
        if(err) {
            res.writeHead(404, {'Content-Type':'text/html'}); // HTTP 응답의 상태 코드와 헤더 설정
            return res.end('404 Not found')
        }

        res.writeHead(200, {'Content-Type':'text/html'}) // HTTP 응답 본문에 데이터를 씀
        res.write(data)
        return res.end();
    })


}).listen(8000, ()=> {
    console.log('8000 서버실행');
})