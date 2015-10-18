var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')

var postsController = require('../controllers/posts')

//RESTFUL ROUTES

//GET ALL
router.route('/posts')
  .get(postsController.getAll)
  .post(postsController.createPost)

//DELETE
router.route('/posts/:id')
  .delete(postsController.removePost)



//UN_RESTFUL ROUTES

//LIKE POST
router.route('/posts/like/:id')
  .post(postsController.likePost);

//ADD COMMENT
router.route('/posts/comment/:id')
  .post(postsController.commentPost)

module.exports = router; 