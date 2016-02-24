var Mongoose = require('mongoose'),
    objectId = Schema.Types.ObjectId;

var WaitlistSchema = new Mongoose.Schema({

    restaurant_id: { type: objectId, ref: 'Restaurant' },
    user_id: { type: objectId, ref: 'User' },
    addedPerson: {
        name: { type: String },
        amountInGroup: { type: Number },
        phoneNumber: { type: Number }
    }

});

module.exports = Mongoose.model('Restaurant', WaitlistSchema)
