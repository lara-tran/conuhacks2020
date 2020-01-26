const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  sessionName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  hostName: {
    type: String
  },
  guests:{
    type: [String],
  }
});

const Session = mongoose.model("Session", SessionSchema);
module.exports = Session;