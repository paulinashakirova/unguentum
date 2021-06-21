var express = require('express');
var router = express.Router();
const db = require('../model/helper');

const filterPerfumes = (queryParams) => {
  let where = '';
  //check seasonS front end
  if ('season' in queryParams) {
    where += `season = '${queryParams.season}'`;
  }
  console.log(where);
  if ('mood' in queryParams) {
    if (where) {
      where += ` AND `;
    }
    where += `mood = '${queryParams.mood}'`;
  }
  console.log(where);
  if ('time_of_day' in queryParams) {
    if (where) {
      where += ` AND `;
    }
    where += `time_of_day = '${queryParams.time_of_day}'`;
  }
  console.log(where);
  if ('scent' in queryParams) {
    if (where) {
      where += ` AND `;
    }
    where += `scent = '${queryParams.scent}'`;
  }
  console.log(where);
  if ('style' in queryParams) {
    if (where) {
      where += ` AND `;
    }
    where += `style = '${queryParams.style}'`;
  }
  console.log(where);
  if ('gender' in queryParams) {
    if (where) {
      where += ` AND `;
    }
    where += `gender = '${queryParams.gender}'`;
  }
  console.log(where);
  if (where) {
    where = `WHERE ` + where;
  }
  console.log(where);
  return where;
};
// && 'mood' in queryParams
//if there are two where...in between insert string `AND`
//maybe create another if (before the 'where' one... that would check if there is more than one filter chosen)
//but then i also need to stop before the last one...
//how would i know which one is the last one? if I cannot predict the amount of filters
//do I create chain statement(dont know how yet)
// if ('scent' in queryParams) {
// }
// GET perfume list

//return piece of sql WHERe part if any query param weree passed
//createWhere(req.query) (if non chosen would return an empty string)
//selected some attributes
router.get('/', function (req, res, next) {
  let where = filterPerfumes(req.query);
  // console.log(where);
  //where will be a string (empty or with a sting like WHERE season = "spring")
  db('SELECT * FROM perfumes ' + where)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

// // GET one perfume
router.get('/:id', function (req, res) {
  db(`SELECT * FROM perfumes WHERE id = ${req.params.id};`)
    .then((results) => {
      if (results.data.length === 0)
        return res.status(404).send({ msg: 'oups... This perfume is not found, but you have these:' });
      //why do we use zero?it works without it as well
      res.send(results.data[0]);
    })
    .catch((err) => res.status(500).send(err));
});
////////////////////////////////////////////////////////////////

//if true... after WHERE season = 'query param' AND mood = 'req.query.mood'
router.get('/', function (req, res) {
  //loop to iterate through key of that object
  //season, mood, brand
  //SELECT * from perfumes WHERE season = 'req.query.season' AND mood = 'req.query.mood'
  db(`SELECT season FROM perfumes WHERE season = ${req.params.season};`)
    .then((results) => {
      if (results.data.length === 0)
        return res.status(404).send({ msg: 'oups... This perfume is not found, but you have these:' });

      res.send(results.data[0]);
    })
    .catch((err) => res.status(500).send(err));
});
////////////////////////////////////////////////////////////////
// INSERT a new perfume into the DB
router.post('/', function (req, res, next) {
  db(
    `INSERT INTO perfumes (name, brand, scent, mood, style, season, gender, time_of_day) VALUES ('${req.body.name}', '${req.body.brand}', '${req.body.scent}',  '${req.body.mood}','${req.body.style}','${req.body.season}', '${req.body.gender}', '${req.body.time_of_day}');`
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
      res.send({ msg: 'Your perfume was deleted successfully!' });
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
