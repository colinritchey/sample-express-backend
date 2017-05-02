const express = require('express');
const router = express.Router();
const request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');

  request({
    url: 'https://api.github.com/users/colinritchey',
    headers: {'User-Agent': 'sampleApp'}
  }).pipe(res);

});

module.exports = router;
