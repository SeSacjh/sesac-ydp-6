// 파일생성

const fs = require('fs');
const data = fs.readFileSync('./input.txt','utf-8') // 파일이 완전히 읽힐 때까지 다음 코드가 실행되지 않도록
console.log(data);
console.log('파일 읽기 완료')

// fs.readFile('./input.txt', function(err, data){
//     console.log(data);
// })
// console.log('파일 읽기 완료');