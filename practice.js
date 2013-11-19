var google = require('google');

var googleFunction:
      {
        google.resultsPerPage = 30;
              var nextCounter = 0;
      google(trends, function(err, next, links){
        if (err) console.error(err);
        for (var i = 0; i < links.length; ++i) {
          console.log(links[i].title + ' - ' + links[i].link); //link.href is an alias for link.link
          console.log(links[i].description + "\n");
        }
        if (nextCounter < 4) {
          nextCounter += 1;
          if (next) next();
        }
      });
    }


  var googleSearchResultCount = 30;

  for (var i= 0; i < response[0].trends; i++) {
    function getGoogleSearchResults(res, response[0].trends, i) {
      var trends= [];
              for (var i= 0; i < response[0].trends.length; i++){
                //trends.push(response[0].trends[i].name);

                      app.get('/trends', function(req, res){
                            T.get("trends/place", {id: 1}, function(err, response) 
                            {
                              if (err) {
                                res.send('error');
                              }
                              else 
                              {
                              return googleFunction; 
                              }


                            }

  //i = 10;
                            )}



function getGoogleSearchResults(res, trends, index) {
  google(trends[index].name, function(result) {
    googleSearchResultCount++;
    for (var j= 0; i < response[0].trends.length; i++) {
      // add these search results to the trend
      trends[index].results = results[j];

    }

    if (googleSearchResultCount == trends.length) {
       // this is your last google search result that we're waiting for
       res.send(trends);
    }
  });
}
// var trends= [];
          // for (var i= 0; i < response[0].trends.length; i++){
          //   trends.push(response[0].trends[i].name);

//  app.get('/trends', function(req, res){
//       T.get("trends/place", {id: 1}, function(err, response) 
//       {
//         if (err) {
//           res.send('error');
//         }
//         else 
//         {
// }
//         res.send(response[0].trends);

//       });




