var DB = require("./db");

module.exports = class MovieDao {
  constructor() {
    this.db = new DB().getInstance();
  }
  getAllReviews = (callback) => {
    const sql = "SELECT * FROM ebdb.Review;";
    this.db.executeQuery(sql, callback);
  };

  getReviewById = (id, callback) => {
    const sql = "SELECT * FROM ebdb.Review WHERE id = " + id;
    this.db.executeQuery(sql, callback);
  };
};
