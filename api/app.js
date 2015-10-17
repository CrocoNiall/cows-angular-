var express       = require('express');
var mongoose      = require('mongoose');
var app           = express();
var cours         = require('cors')
var server        = require('http').createServer(app);
var port          = process.env.PORT || 3000
var morgan        = require('morgan');
var bodyParser    = require('body-parser');


//connect to db
mongoose.connect('mongodb://localhost/hate-angular')

var Post = require('./models/Post')

//configure routes 
var routes = require('./config/routes');



//configure logger
app.use(morgan('dev'))

//configure Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(routes);

// QUESTION 1
var post1 = new Post({
  userName: 'Niallio',
  postTitle: 'TestPost',
  postText: 'This is very interesting post'
})

post1.save(function(err, post) {
  if (err) console.log(err)
    console.log('post1 Saved');
})


//init server
server.listen(port, function(){
  console.log('Server has been started on port %s ...', port)
})