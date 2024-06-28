const User = require('../model/User');

exports.main = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  const data = {
    userId: req.body.userId,
    pw: req.body.pw,
    name: req.body.name
  };

  User.signup(data, (insertId) => {
    res.status(200).send('User registered successfully');
  });
};

// 로그인 처리
exports.signin = (req, res) => {
  const data = {
    userId: req.body.userId,
    pw: req.body.pw
  };

  User.signin(data, (results) => {
    if (results.length === 0) {
      return res.status(401).send('Invalid credentials');
    }

    console.log('User logged in:', results[0].userid);
    res.status(200).send('User logged in successfully');
  });
};