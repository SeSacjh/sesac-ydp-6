const express = require('express');
const app = express();
const PORT = 8000;

// View 엔진 설정
app.set('view engine', 'ejs');
app.set('views', './views');

// 미들웨어 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터 설정
const indexRouter = require('./routes/user');
app.use('/user', indexRouter);

// 404 페이지 처리 (마지막에 설정)
app.get('*', (req, res) => {
  res.render('404');
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
