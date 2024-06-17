// 정보를 받을 것

const express = require('express');
const multer = require('multer'); // multer 모듈 불러오기
const app = express();
const PORT = 8888;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// multer 미들웨어 등록
app.use('/uploads', express.static(__dirname + '/uploads'));
const upload = multer({
    dest: 'uploads/',
})

app.get('/', function (req, res) {
    res.render('index', { title: '파일 업로드를 배워보자!'});
})

app.listen(PORT, () => {
    console.log(`Start server!!! http://localhost:${PORT}`);
})