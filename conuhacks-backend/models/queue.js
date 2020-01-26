const mongoose = require('mongoose');

const QueueSchema = new mongoose.Schema({
  songName: {
    type: String,
  },
  artistName: {
    type: String
  },
  sessionName:{
    type: String
  },
  uri:{
    type: String
  }
});

const Queue = mongoose.model("Queue", QueueSchema);
module.exports = Queue;