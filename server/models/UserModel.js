var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    objectId = Schema.Types.ObjectId,
    HoursSchema = ('./HoursSchema'),
    MenuSchema = ('./MenuSchema');

var User = new Schema({
    userName: {type: String, required: true, unique: true },
    password: {type: String, required: true },
    email: {type: String, required: true },
    restaurant_id: {type: objectId, ref: 'Restaurant '}
});

module.exports = Mongoose.model('Restaurant', User)