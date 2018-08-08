const express = require('express');
const Twitter = require('twitter');
const config = require('./config');
const app = express();

const port = config.applicationPort;

const client = new Twitter({
  consumer_key: config.consumerKey,
  consumer_secret: config.consumerSecret,
  access_token_key: config.accessToken,
  access_token_secret: config.accessTokenSecret
});


app.get('/tweets/', (request, res) => {
  res.setHeader('Content-Type', 'application/json');
  let params = request.query;
  if(!params.q) {
    res.status(400);
    res.send('Query params missing');
    return false;
  }

  twitterQueryParams = {
    q: params.q,
    count: 100 //max number of tweets per request
  }

  client.get('search/tweets.json', params, function(error, tweets, response) {


    if (error) {
      res.status(400);
      res.send('Twitter api call error');
      return false;

    } else {
      res.send(tweets);
      return true;
    }
  });
});


app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});
