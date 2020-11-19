const db = require("../models/model");

module.exports = {
  checkUser: (req, res, next) => {
    const query = 'SELECT id, username FROM users WHERE username = $1';
    const values = [req.body.nickname];
    db.query(query, values)
      .then(response => {
        if (response.rows.length > 0) {
          res.locals.userId = response.rows[0].id;
          return next();
        }
        return next();
      })
      .catch(err => next(err));
  },
  saveUser: (req, res, next) => {
    if (!res.locals.userId) {
      const query = 'INSERT INTO users(username, email) VALUES($1, $2)';
      const values = [req.body.nickname, req.body.email];
      db.query(query, values)
      .then(next())
      .catch(err => next(err));
    } else {
      return next();
    }
  }
};
