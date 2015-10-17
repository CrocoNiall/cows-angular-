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

//EXPORT MODULES

module.exports = {
  getAll: getAll,
  removePost: removePost

}