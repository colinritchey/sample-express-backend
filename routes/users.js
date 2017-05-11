const express = require('express');
const router = express.Router();
const request = require('request');
const rp = require('request-promise');

require('es6-promise').polyfill();


/* GET users listing. */
router.get('/', function(req, res, next) {
  //  with request

  res.setHeader('Content-Type', 'application/json');


  let username = req.query.gitInfo.username;
  let data;
  rp({
    url: `https://api.github.com/users/${username}`,
    headers: {'User-Agent': 'sampleApp'}
  }).then(r => {
    // console.log(r, "here");
    res.send(r);
  });

});

module.exports = router;
