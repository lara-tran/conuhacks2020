const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

var app = express();

const keys = require("./keys");
const sessionModel = require("./models/session");
const queueModel = require("./models/queue");

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
app.get("/session", async (req, res) => {
  const sessions = await sessionModel.find({});

  try {
    res.send(sessions);
  } catch (err) {
    res.status(500).send(err);
  }
});

//join session
app.post("/session/join", async (req, res) => {
  const session = await sessionModel.findOneAndUpdate({name: req.body.sessionName}, {$push: {guests: req.body.guestName}});
  try {
    await session.save();
    res.send(session);
  } catch (err) {
    res.status(500).send(err);
  }
});
//leave session
app.post("/session/leave", async (req, res) => {
  const session = await sessionModel.findOneAndUpdate({name: req.body.sessionName}, {$pull: {guests: req.body.guestName}});
  try {
    await session.save();
    res.send(session);
  } catch (err) {
    res.status(500).send(err);
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
