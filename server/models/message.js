// Example Mongoose model placeholder
const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema({
  userId: String,
  text: String,
  timestamp: Date
});
module.exports = mongoose.model('Message', MessageSchema);
