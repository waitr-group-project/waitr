var Mongoose = require('mongoose');
    // HoursSchema = ('./HoursSchema'),
    // MenuSchema = require('./MenuSchema');

var RestaurantSchema = new Mongoose.Schema({

    restaurantName: { type: String, required: true },
    addressLineOne: { type: String },
    addressLineTwo: { type: String },
    city: { type: String },
    state: { type: String },
    zipcode: { type: String },
    location: { type: String },
    shortDescription: { type: String },
    description: { type: String },
    foodType: { type: String },
    hours: {
        monday: { openTime: { type: Number }, closeTime: { type: Number } },
        tuesday: { openTime: { type: Number }, closeTime: { type: Number } },
        wednesday: { openTime: { type: Number }, closeTime: { type: Number } },
        thursday: { openTime: { type: Number }, closeTime: { type: Number } },
        friday: { openTime: { type: Number }, closeTime: { type: Number } },
        saturday: { openTime: { type: Number }, closeTime: { type: Number } },
        sunday: { openTime: { type: Number }, closeTime: { type: Number } }
    },
    menu: {
        item: { type: String },
        desc: { type: String },
        price: { type: Number },
        section: { type: String }
    },
    waitlist_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'Waitlist' },
    // waitTimePerUser: { type: Number }

});

module.exports = Mongoose.model('Restaurant', RestaurantSchema)
