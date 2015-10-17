var mongoose    = require('mongoose');
// var User        = mongoose.model('User');

//define posts schema and validations

var postSchema = new mongoose.Schema({
  userName: {type: String, required: true},
  postTitle: {type: String, required: true},
  postText: {type: String, required: true},
  comments: [],
  likes: {type: Number, default: 0}
})

var Post = mongoose.model('Post', postSchema)

module.exports = Post;