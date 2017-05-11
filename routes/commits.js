const express = require('express');
const router = express.Router();
// const request = require('request');
const rp = require('request-promise');

require('es6-promise').polyfill();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.setHeader('Content-Type', 'application/json');

  let username = req.query.gitInfo.username;
  let repoName = req.query.gitInfo.firstRepoName;
  // let data;

  console.log("username", username);
  console.log("repoName", repoName);

  rp({
    url: `https://api.github.com/repos/${username}/${repoName}/commits`,
    headers: {'User-Agent': 'sampleApp'}
  }).then(r => {
    res.send(r);
  });


});

module.exports = router;
