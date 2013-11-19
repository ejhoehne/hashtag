// var twitter = require('ntwitter');
var twit= require('twit');
var express= require('express');
var app= express();
app.use(express.bodyParser());
var google = require('google');


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


app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
  });

     app.get('/trends', function(req, res)
     {
       T.get("trends/place", {id: 1}, function(err, response)
       {
         if (err)
         {
           res.send('error');
          }
         else
         {
             var trends= [];
            for (var i= 0; i < response[0].trends.length; i++){

              trends.push(response[0].trends[i].name); //Put google's search api here and return first few 

         }
         res.send(response[0].trends);

       }
          
        
       // res.send(trends);
   

  });
      });





app.listen(8900);
console.log('listen');







