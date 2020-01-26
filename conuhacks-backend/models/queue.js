const mongoose = require('mongoose');

const QueueSchema = new mongoose.Schema({
  songName: {
    type: String,
  },
  artist: {
    type: String
  },
  sessionName:{
    type: String
  }
});

const Queue = mongoose.model("Queue", QueueSchema);
module.exports = Queue;