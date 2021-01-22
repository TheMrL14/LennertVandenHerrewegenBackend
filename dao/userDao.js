var DB = require("../connection/db");
const dbPath = "ebdb.User";
const dbReviewPath = "ebdb.Review";
module.exports = class MovieDao {
  constructor() {
    this.db = new DB().getInstance();
  }
  getAllUsers = (callback) => {
    const sql = "SELECT * FROM " + dbPath + ";";
    this.db.executeQuery(sql, callback);
  };

  getUserById = (id, callback) => {
    const sql = "SELECT * FROM " + dbPath + " WHERE userId = '" + id + "'";
    this.db.executeQuery(sql, callback);
  };

  checkIfUserExist = (id, callback) => {
    const sql =
      "SELECT COUNT(*) AS count FROM " + dbPath + " WHERE userId ='" + id + "'";
    this.db.executeQuery(sql, callback);
  };

  getReviewsOfUser = (id, callback) => {
    const sql = "SELECT * FROM " + dbReviewPath + " WHERE userId ='" + id + "'";
    this.db.executeQuery(sql, callback);
  };

  addNewUser = (user, callback) => {
    let newUser = {
      userId: user.userId,
      userName: user.userName,
      email: user.email,
      isVerified: 0,
    };
    const sql = "INSERT INTO " + dbPath + " SET ?";
    this.db.executePostQuery(sql, newUser, callback);
  };

  updateUser = (user, id, callback) => {
    const sql =
      "UPDATE " +
      dbPath +
      " SET " +
      Object.keys(user)
        .map((key) => `${key} = ?`)
        .join(", ") +
      " WHERE userId = ?";

    const post = [...Object.values(user), id];
    this.db.executePostQuery(sql, post, callback);
  };

  deleteUser = (id, callback) => {
    const sql = "DELETE FROM " + dbPath + " WHERE userId = " + id;
    this.db.executeQuery(sql, callback);
  };
};
