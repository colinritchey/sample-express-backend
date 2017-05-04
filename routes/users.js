const express = require('express');
const router = express.Router();
const request = require('request');

require('es6-promise').polyfill();
require('isomorphic-fetch');
const headers = new Headers({
    "User-Agent"   : "GH-User-Stats"
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  //  with request

  res.setHeader('Content-Type', 'application/json');
  // console.log(res, "res");
  console.log(req.params.username, "req params");

  let username = req.query.gitInfo.username;
  let data;
  console.log(username, "req query");
  request({
    url: `https://api.github.com/users/${username}`,
    headers: {'User-Agent': 'sampleApp'}
  }).pipe(res);



  /* With isomorphic-fetch */

  // fetch('https://api.github.com/users/colinritchey', { headers })
  //   .then(function(response) {
  //     if (response.status >= 400) {
  //       throw new Error("Bad response from server");
  //     }
  //     console.log(response.json());
  //
  //   })
  //   .then(function(r) {
  //     console.log(r.json());
  //     res.send(r.json());
  //   });

});

module.exports = router;
