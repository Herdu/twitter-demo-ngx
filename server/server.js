const express = require('express');
const Twitter = require('twitter');
var config = {};
const fs = require('fs');

if (fs.existsSync('./config.js')) {
  config = require('./config');
} else {
  config = {
    consumerKey: '--- consumer key ---',
    consumerSecret: '--- consumer secret ---',
    accesToken: '--- access token ---',
    accessTokenSecret: '--- access token secret ---'
  };
}

const app = express();

const port = config.applicationPort;

const client = new Twitter({
  consumer_key: config.consumerKey,
  consumer_secret: config.consumerSecret,
  access_token_key: config.accessToken,
  access_token_secret: config.accessTokenSecret
});

app.use((req, res, next) => {
  //allow CORS. Change on prod.
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Content-Type', 'application/json');
  next();
});


app.get('/tweets/', (request, res) => {
  var params = request.query;
  if(!params.channel) {
    res.status(400);
    res.send('Channel name is missing!');
    return false;
  }

  searchUserQueryParams = {
    q: params.channel,
    count: '1' //max number of tweets per request
  };

  client.get('users/search', searchUserQueryParams, (error, data, response) => {
    if(error || data.length < 1) {
      res.status(400);
      res.send('User not found');
      return false;
    } else {
      //get first user
      userId = data[0].id_str;
      client.get('statuses/user_timeline.json', {
        user_id: userId,
        count: '200',
        tweet_mode: 'extended'
      } , (error, tweets, response) => {
        if (error) {
          res.status(400);
          res.send('User tweets not found');
          return false;

        } else {
          res.send(tweets);
          return true;
        }
      });
    }
  });
});


app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});
