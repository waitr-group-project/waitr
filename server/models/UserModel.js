var Mongoose = require('mongoose'),
    objectId = Schema.Types.ObjectId;

var User = new Mongoose.Schema({

    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    restaurant_id: { type: objectId, ref: 'Restaurant' },
    role: {
      type: String,
      enum: ['user', 'admin']
    }

});

module.exports = Mongoose.model('Restaurant', User)
