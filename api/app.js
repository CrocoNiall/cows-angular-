var express       = require('express');
var mongoose      = require('mongoose');
var app           = express();
var cors          = require('cors')
var server        = require('http').createServer(app);
var port          = process.env.PORT || 3000
var morgan        = require('morgan');
var bodyParser    = require('body-parser');


//connect to db
mongoose.connect('mongodb://localhost/hate-angular')

var Post = require('./models/Post')

//configure routes 
var routes = require('./config/routes');

app.use(cors());

//configure logger
app.use(morgan('dev'))

//configure Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(routes);

// QUESTION 1
var post1 = new Post({
  userName: 'Harry The Cow',
  postTitle: 'Omero undead survivor',
  postText: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.'
})

post1.save(function(err, post) {
  if (err) console.log(err)
    console.log('post1 Saved');
})


//init server
server.listen(port, function(){
  console.log('Server has been started on port %s ...', port)
})