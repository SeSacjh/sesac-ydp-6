const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=> { // req: 클라이언트 요청 객체, res: 서버의 응답 객체
    let path ="./views/"
    switch(req.url){
        case '/':
            path +='index.html' // ./views/index.html
            res.statusCode = 200;
            break;
        case '/about':
            path +='about.html'
            res.statusCode = 200;
            break;
        default:
        res.statusCode = 404;
        break;
    }

    fs.readFile(path, (err,data)=> {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.end(data)
        }
    })
})

server.listen(8000, ()=>{
    console.log('8000포트에서 실행');
})