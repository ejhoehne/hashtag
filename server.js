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
    T.get("trends/place", {id: 1}, function(err, response)
    {
         if (err)
         {
           res.send('error');
          }
         else
         {
             var trends= [];
             var googleSearchResults= 30; 
              for (var i= 0; i < response[0].trends; i++)
            {
              trends.push(response[0].trends[i].name);
              function getGoogleSearchResults(res, response[0].trends;i++)
              {

                google.resultsPerPage = 25;
                var nextCounter = 0;

                google(trends, function(err, next, links)
                {
                  if (err) console.error(err);

                  for (var i = 0; i < links.length; ++i) 
                  {
                    console.log(links[i].title + ' - ' + links[i].link); //link.href is an alias for link.link
                    console.log(links[i].description + "\n");
                  }

                  if (nextCounter < 4)
                  {
                    nextCounter += 1;
                    if (next) next();
                  }
                }
                    function getGoogleSearchResults(res, trends, index)
                  {
                      google(trends[index].name, function(result)
                      {
                        googleSearchCount++; 
                        for (var i= 0; i < response[0].trends.length; i++)
                        {
                          trends[index].results= results[j];
                        }
                        if (googleSearchCount== trends.length)
                        {
                          res.send(response[0].trends);

                        }
                      });
                    });

              }
            

         }
         
       }
          
        
       // res.send(trends);
   

  });
      });


app.listen(8900);
console.log('listen');







