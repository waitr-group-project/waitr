var Mongoose = require('mongoose'),
    objectId = Schema.Types.ObjectId,
    HoursSchema = ('./HoursSchema'),
    MenuSchema = ('./MenuSchema');

var RestaurantSchema = new Mongoose.Schema({

    restaurantName: { type: String, required: true },
    addressLineOne: { type: String, required: true },
    addressLineTwo: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String },
    location: { type: String },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    foodType: { type: String, required: true },
    hours: HoursSchema,
    menu: MenuSchema,
    waitlist_id: { type: objectId, ref: 'Waitlist' },
    waitTimePerUser: { type: Number }

});

module.exports = Mongoose.model('Restaurant', RestaurantSchema)
