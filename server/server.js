var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose')

var userCtrl = require('./controllers/userCtrl'),
    restaurantCtrl = require('./controllers/restaurantCtrl'),
    waitlistCtrl = require('./controllers/waitlistCtrl');

var port = 3210;

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/../www'));

var mongoUri = 'mongodb://localhost:27017/waitr';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log('Mongo connected at', mongoUri);
})




app.post('api/user', userCtrl.create);
app.get('api/user', userCtrl.read);
app.put('api/user/:id', userCtrl.update);
app.delete('api/user/:id', userCtrl.delete);

app.post('api/restaurant', restaurantCtrl.create);
app.get('api/restaurant', restaurantCtrl.read);
app.put('api/restaurant/:id', restaurantCtrl.update);
app.delete('api/restaurant/:id', restaurantCtrl.delete);

app.post('api/waitlist', waitlistCtrl.create);
app.get('api/waitlist', waitlistCtrl.read);
app.put('api/waitlist/:id', waitlistCtrl.update);
app.delete('api/waitlist/:id', waitlistCtrl.delete);



app.listen(port, function() {
  console.log("listening on port ", port);
});
