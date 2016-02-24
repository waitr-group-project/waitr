var Mongoose = require('mongoose');

var WaitlistSchema = new Mongoose.Schema({

    restaurant_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    estWait: {type: Number, required: true},
    list: [{
        user_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'User' },
        name: { type: String, required: true },
        amountInGroup: { type: Number, required: true },
        phoneNumber: { type: Number, required: true },
        timeAdded: {type: Date, required: true},
        estWait: {type: Number, required: true},
        numInParty: {type: Number, required: true}
    }]

});

module.exports = Mongoose.model('Waitlist', WaitlistSchema)
