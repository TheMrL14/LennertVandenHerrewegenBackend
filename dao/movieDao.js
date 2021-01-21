var DB = require("../connection/db");
const dbPath = "ebdb.Review";
module.exports = class MovieDao {
  constructor() {
    this.db = new DB().getInstance();
  }
  getAllReviews = (callback) => {
    const sql = "SELECT * FROM " + dbPath + ";";
    this.db.executeQuery(sql, callback);
  };

  getReviewById = (id, callback) => {
    const sql = "SELECT * " + dbPath + " WHERE id = " + id;
    this.db.executeQuery(sql, callback);
  };

  addNewReview = (review, callback) => {
    const post = {
      title: review.title,
      review: review.review,
      score: review.score,
      userId: review.userId,
    };
    const sql = "INSERT INTO " + dbPath + " SET ?";
    this.db.executePostQuery(sql, post, callback);
  };

  updateUser = (review, id, callback) => {
    const sql =
      "UPDATE " +
      dbPath +
      " SET " +
      Object.keys(review)
        .map((key) => `${key} = ?`)
        .join(", ") +
      " WHERE id = ?";

    const post = [...Object.values(review), id];
    this.db.executePostQuery(sql, post, callback);
  };

  deleteUser = (id, callback) => {
    const sql = "DELETE FROM " + dbPath + " WHERE id = " + id;
    this.db.executeQuery(sql, callback);
  };
};
