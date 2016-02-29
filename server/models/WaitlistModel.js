var Mongoose = require('mongoose');

var WaitlistSchema = new Mongoose.Schema({

    // restaurant_id: { type: String},
    restaurant_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    quotedTime: {type: Number},
    list: [{
        user_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'User' },
        firstName: { type: String/*, required: true*/ },
        lastName: { type: String/*, required: true*/ },
        partySize: { type: Number/*, required: true*/ },
        phone: { type: Number/*, required: true*/ },
        timeAdded: { type: Date, default: Date.now() },
        quotedTimeGiven: {type: Number/*, required: true*/},
        notes: {type: String}
    }]

});

module.exports = Mongoose.model('Waitlist', WaitlistSchema);
