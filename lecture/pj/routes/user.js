const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

router.get('/', controller.main);

router.get('/profile', (req, res) => {
    res.render('profile');  // profile.ejs 파일을 렌더링
  });

router.get('/signup', (req, res) => res.render('signup'));
router.post('/signup', controller.signup);
router.get('/signin', (req, res) => res.render('signin'));
router.post('/signin', controller.signin);



module.exports = router;
