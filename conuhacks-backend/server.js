const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookie = require("cookie-parser");
const cors = require("cors");
var request = require('request'); // "Request" library


var app = express();

const keys = require("./keys");
const sessionModel = require("./models/session");
const queueModel = require("./models/queue");
var querystring = require('querystring');

const clientId = keys.SPOTIFY_CLIENT_ID;
const clientSecret = keys.SPOTIFY_CLIENT_SECRET;
var redirect_uri = 'http://localhost:3000/callback'; // Your redirect uri


const url = `mongodb+srv://${keys.MONGO_USER}:${keys.MONGO_PASSWORD}@conuhacks2020-njuuz.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(url, {
  useNewUrlParser: true
});

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(cookie());
app.use(cors());

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});

app.get("/", function(req, res) {
  res.send("Hello World!");
});

//create session
app.post("/session/create", async (req, res) => {
  const session = new sessionModel(req.body);
  try {
    await session.save();
    res.send(session);
  } catch (err) {
    res.status(500).send(err);
  }
});


//get sessions
app.get("/session/:sessionName", async (req, res) => {
  const session = await sessionModel.findOne({sessionName: req.params.sessionName});

  try {
    res.send(session);
  } catch (err) {
    res.status(500).send(err);
  }
});

//join session
app.post("/session/join", async (req, res) => {
  const session = await sessionModel.findOneAndUpdate(
    { sessionName: req.body.sessionName },
    { $push: { guests: req.body.guestName } }
  );
  try {
    await session.save();
    res.send(session);
  } catch (err) {
    res.status(500).send(err);
  }
});
//leave session
app.post("/session/leave", async (req, res) => {
  let session = await sessionModel.findOne({ sessionName: req.body.sessionName });
  console.log(req.body);
  try {
      await sessionModel.updateOne(
        { sessionName: req.body.sessionName },
        { $pull: { guests: req.body.guestName } }
      );

    await session.save();
    res.send();
  } catch (err) {
    res.status(500).send(err);
  }
});
app.delete("/session", async (req, res) => {
  const session = await sessionModel.findOne({ sessionName: req.body.sessionName });
  if (session) {
    try {
      await sessionModel.deleteOne({ sessionName: req.body.sessionName });

      await session.save();
    } catch (err) {
      res.status(500).send(err);
    }
  }
});

//add song to queue
app.post("/queue", async (req, res) => {
  const song = new queueModel(req.body);
  try {
    await song.save();
    res.send(song);
  } catch (err) {
    res.status(500).send(err);
  }
});

//get all songs from queue
app.get("/queue/:sessionName", async (req, res) => {
  console.log(req);
  const songs = await queueModel.find({ sessionName: req.params.sessionName });

  try {
    res.send(songs);
  } catch (err) {
    res.status(500).send(err);
  }
});

//remove
app.post("/queue/delete", async(req,res)=> {
  const song = await queueModel.findOne({ songName: req.body.songName, artistName: req.body.artistName, sessionName:req.body.sessionName});
  if(song){
    try{
      await queueModel.deleteOne(song);
      res.send();
    } catch (err) {
      res.status(500).send(err);
    }
  }
  
})
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
var stateKey = 'spotify_auth_state';

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email user-modify-playback-state user-read-currently-playing user-read-playback-state';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: clientId,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});
app.get('/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(clientId + ':' + clientSecret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body);
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect('http://localhost:4200/room/partyhub?' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } else {
        res.redirect('' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});