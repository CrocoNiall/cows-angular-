var express       = require('express');
var mongoose      = require('mongoose');
var app           = express();
var server        = require('http').createServer(app);
var port          = process.env.PORT || 3000
var morgan        = require('morgan');
var body-parser   = require('body-parser');


//connect to db
mongoose.connect('mongodb://localhost/hate-angular')


//configure routes 
var routes = require('./config/routes');
app.use(corse())
app.use(routes);

//configure logger
app.use(morgan('dev'))

//configure Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoed({ extended: true}));


//init server
server.listen(port, function(){
  console.log('Server has been started on port %s ...', port)
})