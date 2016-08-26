var express = require('express');
var router = express.Router();
var Twit = require('twit');

var T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

router.post('/', (req, res, next) => {
  T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
    console.log(data)
  t((err) => {
    if (err) {
      res.status(500).send()
    } else {
      res.json(t)
      }
    })
  })
})


module.exports = router;
