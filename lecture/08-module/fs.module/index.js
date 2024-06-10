// demo 폴더 생성
const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname,'demo'), (err) => {
    if(err) {
        return console.error(err);
    }
    console.log('디렉토리 생성완료');
})