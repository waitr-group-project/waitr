var Mongoose = require('mongoose');

var WaitlistSchema = new Mongoose.Schema({

    restaurant_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    user_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'User' },
    addedPerson: {
        name: { type: String },
        amountInGroup: { type: Number },
        phoneNumber: { type: Number }
    }

});

module.exports = Mongoose.model('Waitlist', WaitlistSchema)
