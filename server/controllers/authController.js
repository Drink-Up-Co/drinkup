const db = require("../models/model");

module.exports = {
  checkUser: (req, res, next) => {
    const query = 'SELECT * FROM users';
    db.query(query)
      .then(response => {
        for (let i = 0; i < response.rows.length; i+=1) {
          if (response.rows[i].username === req.body.nickname) {
            res.locals.userExists = true;
            return next();
          }
        }
        return next();
      })
      .catch(err => next(err));
  },
  saveUser: (req, res, next) => {
    if (!res.locals.userExists) {
      const query = 'INSERT INTO users(username, email) VALUES($1, $2)';
      const values = [req.body.nickname, req.body.email];
      db.query(query, values)
      .then(response => {
        console.log(response.rows);
        return next();
      })
      .catch(err => next(err));
    }
    return next();
  }
};
