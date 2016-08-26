var express = require('express');
var router = express.Router();
var Twit = require('twit');

var twitter = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tweet a Random Chuck Norris Joke!' });
});

twitter.post('statuses/update', { status: 'code || die' }, function(err, data, response) {
console.log(data)
})
module.exports = router;


//POST Tweet
// router.post('/', function (req, res, next) {
//   const chuckTwit = new Tweet(req.body)
//   chuckTwit.userId = req.user.sub;
//   chuckTwit.save(function (err) {
//     if (err) {
//       res.status(500).send(err)
//     } else {
//       res.json(chuckTwit)
//     }
//   })
// });
