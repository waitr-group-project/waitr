var Mongoose = require('mongoose');

var WaitlistSchema = new Mongoose.Schema({

    // restaurant_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    restaurant_id: { type: String},
    quotedTime: {type: Number},
    list: [{
        // user_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'User' },
        user_id: { type: String},
        lastName: { type: String},
        partySize: { type: Number},
        phoneNumber: { type: Number},
        timeAdded: {type: Date},
        quotedTimeGiven: {type: Number},
    }]

});

module.exports = Mongoose.model('Waitlist', WaitlistSchema);
