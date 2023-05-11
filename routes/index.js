var express = require('express');
var router = express.Router();

require ('../models/connection');

const Questions = require('../models/questions');

router.get('/questions', (req, res) => {
  Questions.find().then(data => {
    if (data) {
      //console.log(data);
      res.json( {result : true , data})
    } else {
      res.json({result : false })
    }
  })
})

  
module.exports = router;
