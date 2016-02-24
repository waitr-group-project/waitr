var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    objectId = Schema.Types.ObjectId,
    HoursSchema = ('./HoursSchema'),
    MenuSchema = ('./MenuSchema');

var Waitlist = new Schema({
    restaurant_id: {type: objectId, ref: 'Restaurant'},
    user_id: {type: objectId, ref: 'User'},
    addedPerson: {
        name: {type: String},
        amountInGroup: {type: Number},
        phoneNumber: {type: Number}
    }
});

module.exports = Mongoose.model('Restaurant', Waitlist)