const express = require('express');
const multer = require('multer'); // multer 모듈 불러오기
const path = require('path');

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/uploads', express.static(__dirname + '/uploads'));
// const upload = multer({
//     dest: 'uploads/',
// });
const uploadDetail = multer({
    storage: multer.diskStorage({ // 저장할 공간에 대한 정보
        destination(req, file, done) {
            done(null, 'uploads/') // 파일을 저장할 경로
        },
        filename(req, file, done) { // done은 끝났다라는 의미, 다음으로 넘어감
            const ext = path.extname(file.originalname); // extname: 확장자를 추출해주는 메서드
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); // basename: 파일명에서 확장자를 제외한 파일 이름만 추출
        }
    }),
    limits: {fileSize: 5 * 1024 * 1024} // 업로드 크기 제한
})




// multer객체.single(): 하나의 파일을 업로드
// - single 미들웨어는 라우터 미들웨어 앞에 넣으면 됨
// - multer 객체 생성시 작성한 옵션에 따라 파일 업로드 후, req.file 객체 생성
app.post("/upload", uploadDetail.single('userfile'), (req, res) => {
    console.log(req.body); // { title: '바탕화면 사진임' }
    console.log(req.file); // 업로드된 파일 정보   

    // res.send('Success upload!');
    res.render('uploaded', { title: req.body.title, src: req.file.path })

    // 파일 탐색기 > uploads 폴더가 생성!
    // 확장자 없이 파일명이 자동으로 저장됨 (multer 객체를 생성할 때 dest 옵션 외에 설정을 한 게 없어서)
    // 파일 탐색기에서 png, jpg 등의 확장자를 붙여보면 우리가 업로드한 파일임이 확인 됨!
});

app.post('/upload/array', uploadDetail.array('banana'), (req, res) => {
    console.log(req.body); // { titl: '파일 2개 업로드 중!!' }
    console.log(req.files); // [ {}, {}, ... ] 배열 형태로 각 파일 정보를 저장

    res.send('Success Upload!! (multiple)');
})

// multer객체.fields(): 여러 파일을 각각의 인풋에 업로드
app.post('/upload/fields', uploadDetail.fields([{ name: 'kiwi' }, { name: 'orange' }]), (req, res) => {
    console.log(req.body);
    console.log(req.files);

    res.send('Success Upload!! (multiple2)');
});

app.get('/', function (req, res) {
    res.render('index', { title: '파일 업로드를 배워보자!!!' });
});

app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});
  