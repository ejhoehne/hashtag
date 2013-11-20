var twit= require('twit');
var express= require('express');
var app= express();
app.use(express.bodyParser());
var google = require('google');


var T = new twit ({
  consumer_key: 'V2JVP3eS6cXDZc1HhbVmWw',
  consumer_secret: '2o0QFu2kSNwUfq7y1YogPgSRWfEsyBBkonUenI',
  access_token: '235698707-2Z41xL3OcE4R45Edb728yI10Ju9oL2tRU3k0tRlM',
  access_token_secret: '5rvNzRbEi7CQLysd187w1FWfz4XVmBp69nmAqT0Bw9DW3'
});

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
  });

app.get('/trends', function(req, res)
{
  // reset this counter to 0 for this new api call
  var googleSearchResultCount = 0;
  T.get("trends/place", {id: 1}, function(err, response)
  {
    if (err)
    {
      // twitter failed to give us trends
      res.send('error');

    }
    else
    {
      // twitter succeed and returned trends
      var trends = response[0].trends;
      for (var i= 0; i < trends.length; i++) {
        // this will do a res.send() when the last one finishes
        getGoogleSearchResults(res, trends, i);
      }
    }
  });

  function getGoogleSearchResults(res, trends, index) {
    var trend = trends[index];
    var trendName = trend.name;
    google.resultsPerPage = 3;
    // call google and get the search results for this trend
    google(trendName, function(err, next, links){
      // keep track how many trend search results have returned so far
      googleSearchResultCount++;
      if (err) {
        // google failed to give us search results
        // trend.results = [];
        trend.results= pastTrends;
      }
      else {
        // google gave us good search results
        trend.results = links;
      }

      // after the last google search call finishes, call node.js' res.send to
      // send back to the angular app
      if (googleSearchResultCount >= trends.length) {
        res.send(trends);
      }
      var pastTrends= res.send(trends);
    });
  }
});

app.listen(8900);
console.log('listen');