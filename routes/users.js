var express = require('express');
var router = express.Router();
var request = require('request');

request.get('https://api.github.com/users/colinritchey').on('response', function(response) {
  console.log(response.statusCode) // 200
  console.log(response.headers['content-type']) // 'image/png'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');

  request({
    url: 'https://api.github.com/users/colinritchey',
    headers: {'User-Agent': 'sampleApp'}
  }).pipe(res);

});

module.exports = router;
