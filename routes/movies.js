/* 
  /movies request
*/
const app = require("express");
const cors = require("cors");
var Auth = require("../connection/Auth");
const Dao = require("../dao/movieDao");
const response = require("../model/Responses");

const router = app.Router();
const dao = new Dao();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,POST",
  allowedHeaders: "",
};

router.use(cors(corsOptions));
//OPTIONS
router.options("/", (req, res, next) => res.send(200, null));

//GET
router.get("/", (req, res, next) => {
  dao.getAllReviews((err, data, fields) => {
    if (err) throw err;
    res.json(data);
  });
});

//POST
router.post("/", (req, res) => {
  let review = {
    title: req.body.title,
    review: req.body.review,
    score: req.body.score,
    userId: req.body.userId,
  };

  dao.addNewReview(review, (err, data, fields) => {
    if (err) throw err;
    res.location("/movies/" + data.insertId);
    res.sendStatus(201);
  });
});

/*
/id
*/

//GET
router.get("/:id", (req, res) => {
  //check if Id in params
  const id = req.params.id;
  if (id == undefined || isNaN(id)) {
    res.sendStatus(404);
    return;
  }
  dao.getReviewById(req.params.id, (err, data, fields) => {
    if (err) throw err;
    if (data === undefined || data.length == 0) {
      res.sendStatus(404);
      return;
    }

    res.json(data);
  });
});

//PUT
router.put("/:id", (req, res) => {
  //check if Id in params
  const id = req.params.id;
  if (id == undefined || isNaN(id)) {
    res.sendStatus(400);
    return;
  }

  let review = {
    title: req.body.title,
    review: req.body.review,
    score: req.body.score,
  };
  // DELETE undefined objects from updated review
  Object.keys(review).forEach((key) =>
    review[key] === undefined ? delete review[key] : {}
  );
  //CHECK IF Object isn't empty after removing undefined options
  if (Object.keys(review).length === 0) {
    res.sendStatus(204);
    return;
  }

  dao.updateUser(review, id, (err, data, fields) => {
    if (err) throw err;
    if (data.affectedRows == 0) {
      res.sendStatus(404);
      return;
    }
    res.sendStatus(200);
    return;
  });
});
//DELETE
router.delete("/:id", (req, res) => {
  //check if Id in params
  const id = req.params.id;
  if (id == undefined || isNaN(id)) {
    res.sendStatus(404);
    return;
  }
  dao.deleteUser(req.params.id, (err, data) => {
    if (err) throw err;
    if (data.affectedRows == 0) {
      res.sendStatus(404);
      return;
    }
    res.sendStatus(200);
    return;
  });
});

//NOT ALLOWED
router.all("/", (req, res, next) => res.sendStatus(404));

module.exports = router;

let checkIfIdInParam = () => {};
