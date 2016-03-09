var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    config = require('./config/config');

var port = 80;

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var userCtrl = require('./controllers/userCtrl'),
    restaurantCtrl = require('./controllers/restaurantCtrl'),
    waitlistCtrl = require('./controllers/waitlistCtrl'),
    twilioCtrl = require('./controllers/twilioCtrl');

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
// app.post('/api/user', userCtrl.create);
app.get('/api/user', userCtrl.read);
app.put('/api/user/:id', userCtrl.update);
app.delete('/api/user/:id', userCtrl.delete);
app.get('/api/user/:id', userCtrl.currentUser);


app.post('/api/restaurant', restaurantCtrl.create);
app.get('/api/restaurant', restaurantCtrl.read);
app.put('/api/restaurant/:id', restaurantCtrl.update);
app.delete('/api/restaurant/:id', restaurantCtrl.delete);
app.get('/api/restaurant/:id', restaurantCtrl.currentRestId);
app.put('/api/restaurant/menu/:id', restaurantCtrl.addItemToMenu);


app.post('/api/waitlist', waitlistCtrl.create);
app.get('/api/waitlist', waitlistCtrl.read);
app.put('/api/waitlist/:id', waitlistCtrl.update);
app.delete('/api/waitlist/:id', waitlistCtrl.delete);

app.put('/api/waitlist/:id/list', waitlistCtrl.addToList);
app.delete('/api/waitlist/:id/list/:listId', waitlistCtrl.removeFromList);
app.get('/api/waitlist/:id/list/:listId', waitlistCtrl.getFromList);
app.put('/api/waitlist/:id/list/:listId', waitlistCtrl.updateListEntry);

app.put('/api/twilio', twilioCtrl.sendTextMessage);

io.on('connection', function(socket) {
    socket.on('newPerson', function(data) {
        console.log("hitting newPerson endpoint");
        io.emit('newPersonAdded', data);
    });
    socket.on('deletePerson', function(data) {
        console.log('hitting deletePerson endpoint on server.js');
        io.emit('deletedPerson', data);
    });
});

http.listen(port, function() {
  console.log("listening on port ", port);
});
