var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')

var postsController = require('../controllers/posts')

//RESTFUL ROUTES

//GET ALL
router.route('/posts')
  .get(postsController.getAll)


//DELETE
router.route('/posts/:id')
  .delete(postsController.removePost)

//LIKE POST
router.route('/posts/like/:id')
  .get(postsController.likePost);


module.exports = router; 