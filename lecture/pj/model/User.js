const db = require('./connection');

const User = {
  // 회원가입 함수
  signup: (data, callback) => {
    const sql = 'INSERT INTO users (userid, password, name) VALUES (?, ?, ?)';
    const values = [data.userId, data.pw, data.name];
    db.query(sql, values, (err, rows) => {
      if (err) {
        throw err;
      }
      console.log('model/User.js >> ', rows);
      callback(rows.insertId);
    });
  },

  // 로그인 함수
  signin: (data, callback) => {
    const sql = 'SELECT * FROM users WHERE userid = ? AND password = ?';
    const values = [data.userId, data.pw];
    db.query(sql, values, (err, results) => {
      if (err) {
        throw err;
      }
      console.log('model/User.js >> ', results);
      callback(results);
    });
  }
};

module.exports = User;
