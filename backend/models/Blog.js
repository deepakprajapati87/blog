const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: String,
  text: String,
  createdAt: { type: Date, default: Date.now }
});

const blogSchema = new mongoose.Schema({
  title: String,
  caption: String,
  description: String,
  image: String,
  community: String,
  date: String,
  likes: { type: Number, default: 0 },
  comments: [commentSchema]
});

module.exports = mongoose.model('Blog', blogSchema);
