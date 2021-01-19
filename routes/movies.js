const express = require("express");

const router = express.Router();
const Dao = require("../movieDao");
const dao = new Dao();

/* 
  /movies request
*/

//GET
router.get("/", function (req, res, next) {
  dao.getAllReviews((err, data, fiels) => {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Movie Reviews retrieved successfully",
    });
  });
});

//POST

//OPTIONS

/*
  /movies/id request
*/

//GET
router.get("/:id", function (req, res, next) {
  dao.getReviewById(req.params.id, (err, data, fiels) => {
    if (err) throw err;
    if (data === undefined || data.length == 0) {
      res.json({
        status: 204,
        message: "Object with id " + req.params.id + " not found",
      });
      return;
    }

    res.json({
      status: 200,
      data,
      message: "Review retrieved successfully",
    });
  });
});

//PUT

//DELETE

//OPTIONS

module.exports = router;
