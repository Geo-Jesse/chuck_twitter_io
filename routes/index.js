var express = require('express');
var router = express.Router();
var Twit = require('twit');



var T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chuck Norris Random Joke Twitter' });
});

module.exports = router;
