const db = require('../models/model.js');

module.exports = {
  async test(req, res, next) {
    console.log('inside test controller!');
    const query = `INSERT INTO users(username, email) VALUES ('john', 'johnlin@gmail.com')`;
    await db.query(query);
    return next();
  },
  async getCocktail(req, res, next) {},
  async upVote(req, res, next) {},
  async favorites(req, res, next) {},
};
