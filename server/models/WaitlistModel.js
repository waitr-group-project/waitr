var Mongoose = require('mongoose');

var WaitlistSchema = new Mongoose.Schema({

    restaurant_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    quotedTime: {type: Number, required: true},
    list: [{
        user_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'User' },
        lastName: { type: String, required: true },
        partySize: { type: Number, required: true },
        phoneNumber: { type: Number, required: true },
        timeAdded: {type: Date, required: true},
        quotedTimeGiven: {type: Number, required: true}
    }]

});

module.exports = Mongoose.model('Waitlist', WaitlistSchema)
