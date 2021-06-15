var express = require('express');
var router = express.Router();
const db = require('../model/helper');

// GET perfume list
router.get('/', function (req, res, next) {
  db('SELECT * FROM perfumes;')
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

// GET one perfume
router.get('/:id', function (req, res, next) {
  db(`SELECT * FROM perfumes WHERE id = ${req.params.id};`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

// INSERT a new perfume into the DB
router.post('/', function (req, res, next) {
  db(
    `INSERT INTO perfumes (name, brand, scent, style, season, gender, time_of_day) VALUES ('${req.body.name}', '${req.body.brand}', '${req.body.scent}', '${req.body.style}','${req.body.season}', '${req.body.gender}', '${req.body.tim_of_day}');`
  )
    //I tried to write an option when apart from message i would also get the whole list back(for the sake of practicing(with async and with a callback hell - to see for myself)but i am not sure it is correct and if it is - how to see the results in my program)
    // .then(db(`SELECT * FROM perfumes WHERE id = ${req.params.id};`))
    .then(() => {
      res.send({ msg: 'New perfume was added successfully!' });

      //res.send({ message: `New perfume was added successfully!`, data: result.data });
    })
    .catch((err) => res.status(500).send(err));
});

// DELETE a perfume from the DB
router.delete('/:id', function (req, res, next) {
  db(`DELETE FROM perfumes WHERE id = ${req.params.id};`)
    .then(() => {
      res.send({ msg: 'Your perfumes were deleted successfully!' });
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
