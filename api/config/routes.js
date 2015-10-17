var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')

var postsController = require('../controllers/posts')

//RESTFUL ROUTES

router.route('/posts')
  .get(postsController.getAll)

router.route('/posts/:id')
  .delete(postsController.removePost)


module.exports = router; 