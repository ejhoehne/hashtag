// var twitter = require('ntwitter');
var twit= require('twit');
var express= require('express');
var app= express();
app.use(express.bodyParser());
var googleapis= require ('googleapis');


// var twit = new twitter({
var T = new twit ({
  consumer_key: 'V2JVP3eS6cXDZc1HhbVmWw',
  consumer_secret: '2o0QFu2kSNwUfq7y1YogPgSRWfEsyBBkonUenI',
  access_token: '235698707-2Z41xL3OcE4R45Edb728yI10Ju9oL2tRU3k0tRlM',
  access_token_secret: '5rvNzRbEi7CQLysd187w1FWfz4XVmBp69nmAqT0Bw9DW3'
});
// twit.get('http://www.twitter.com/trends/current.json', {include_entities:true}, function(data) {
//     console.log(data);
// });

 // twit.stream('statuses.hashtag/sample', function(stream) {
 //   stream.on('data', function (data) {
 //     console.log(data);


// googleapis
//     .discover('urlshortener', 'v1')
//     .discover('plus', 'v1')
//     .execute(function(err, client) {
//   var params = { shortUrl: 'http://goo.gl/DdUKX' };
//   var req1 = client.urlshortener.url.get(params);
//   req1.execute(function (err, response) {
//     console.log('Long url is', response.longUrl);
//   });

  // var req2 = client.plus.people.get({ userId: '+burcudogan' });
  // req2.execute();
// });
    app.get('/trends', function(req, res){
      T.get("trends/current", {id: 1}, function(err, response) {
        res.send('done');

});

    });
app.listen(8900);
