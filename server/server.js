var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    config = require('./config/config');


var userCtrl = require('./controllers/userCtrl'),
    restaurantCtrl = require('./controllers/restaurantCtrl'),
    waitlistCtrl = require('./controllers/waitlistCtrl');

var port = 1234;

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/../www'));

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
    console.log('Mongo connected at ' + config.db);
});


var authorize = function(roles) {
  return function(req, res, next) {
    var authHeader = req.header('Authorization');
    if (authHeader) {
      var token = authHeader.split(' ').pop();
      jwt.verify(token, config.secretKey, function(err, payload) {
        if (err)
          res.status(401).send('Authorization Issue');
        else {
          if (roles.indexOf(payload.role) === -1) res.status(401).send('Unauthorized');
          else next();
        }
      });
    }
    else res.status(401).send('Unauthenticated');
  };
};

// PROTECTED TEST ROUTE
app.get('/protected', authorize(['restaurant']), function(req, res) {
  res.status(200).json('Auth worked!');
});


app.post('/register', userCtrl.register);
app.post('/login', userCtrl.login);
// app.post('api/user', userCtrl.create);
app.get('/api/user', userCtrl.read);
app.put('/api/user/:id', userCtrl.update);
app.delete('/api/user/:id', userCtrl.delete);

app.post('/api/restaurant', restaurantCtrl.create);
app.get('/api/restaurant', restaurantCtrl.read);
app.put('/api/restaurant/:id', restaurantCtrl.update);
app.delete('/api/restaurant/:id', restaurantCtrl.delete);

app.post('/api/waitlist', waitlistCtrl.create);
app.get('/api/waitlist', waitlistCtrl.read);
app.put('/api/waitlist/:id', waitlistCtrl.update);
app.delete('/api/waitlist/:id', waitlistCtrl.delete);
app.put('/api/waitlist/:id/list', waitlistCtrl.addToList);
app.put('/api/waitlist/:id/list/:listId', waitlistCtrl.removeFromList);


app.listen(port, function() {
  console.log('listening on port', port);
});
