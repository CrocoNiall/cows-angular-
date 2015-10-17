var Post = require('../models/Post')

//RETURN ALL 

function getAll(req, res) {
  Post.find(function(error, post){
    if(error) res.json({message: 'could not find any posts'})

      res.json({post: post});
  });
}


// DELETE
function removePost(req, res) {
  var id = req.params.id;

  Post.remove({_id: id}, function(error) {
    if(error) res.json({message: 'Could not delete post b/c:' + error});
    res.json({message: 'post successfully deleted'});
  });
}

// LIKE POST 
function likePost(req, res) {
  var id = req.params.id;

  var post = Post.findById(id, function(err, post){
    var newLikeQty = post.likes + 1
     post.likes = newLikeQty;

     post.save(function(error){
        if (error) res.json({message: 'Could not update b/b: ' + error})
      })
       res.json(post)
  })
}

//ADD COMMENT TO POST
function commentPost(req, res){
  var id = req.params.id
}

//EXPORT MODULES

module.exports = {
  getAll: getAll,
  removePost: removePost,
  likePost: likePost

}