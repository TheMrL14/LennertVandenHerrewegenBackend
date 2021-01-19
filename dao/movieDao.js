var DB = require("../connection/db");

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

  addNewReview = (review, callback) => {
    const post = {
      title: review.title,
      review: review.review,
      score: review.score,
    };
    const sql = "INSERT INTO ebdb.Review SET ?";
    this.db.executePostQuery(sql, post, callback);
  };

  updateUser = (review, id, callback) => {
    const sql =
      "UPDATE ebdb.Review SET " +
      Object.keys(review)
        .map((key) => `${key} = ?`)
        .join(", ") +
      " WHERE id = ?";

    const post = [...Object.values(review), id];
    this.db.executePostQuery(sql, post, callback);
  };

  deleteUser = (id, callback) => {
    const sql = "DELETE FROM ebdb.Review WHERE id = " + id;
    this.db.executeQuery(sql, callback);
  };
};
