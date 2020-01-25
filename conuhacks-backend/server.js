const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');

var app = express();

const keys = require('./keys');
const sessionModel = require('./models/session');

const url = `mongodb+srv://${keys.MONGO_USER}:${keys.MONGO_PASSWORD}@conuhacks2020-njuuz.mongodb.net/test?retryWrites=true&w=majority`
mongoose.connect(url, {
  useNewUrlParser: true
});


app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.post('/session', async(req,res) =>{
  const session = new sessionModel(req.body);
  try {
    await session.save();
    res.send(session);
  } catch (err) {
    res.status(500).send(err);
  }});

  app.get('/session', async (req, res) => {
    const sessions = await sessionModel.find({});
  
    try {
      res.send(sessions);
    } catch (err) {
      res.status(500).send(err);
    }
  });
