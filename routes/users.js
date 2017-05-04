const express = require('express');
const router = express.Router();
const request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.setHeader('Content-Type', 'application/json');
  // console.log(res, "res");
  console.log(req.params.username, "req params");

  let username = req.query.gitInfo.username;
  let data;
  console.log(username, "req query");
  request({
    url: `https://api.github.com/users/${username}/repos`,
    headers: {'User-Agent': 'sampleApp'}
  }).pipe(res);

  // console.log(res, "res");
  // console.log(data, "data");
  // ;

});

module.exports = router;
