var Mongoose = require('mongoose');
    // HoursSchema = ('./HoursSchema'),
    // MenuSchema = require('./MenuSchema');

var RestaurantSchema = new Mongoose.Schema({
    restaurantName: { type: String, required: true },
    //addressLineOne: { type: String, required: true },
    addressLineTwo: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String },
    //location: { type: String },
    //shortDescription: { type: String, required: true },
    //description: { type: String, required: true },
    foodType: { type: String, required: true },
    hours: {
        monday: { openTime: { type: Number }, closeTime: { type: Number } },
        tuesday: { openTime: { type: Number }, closeTime: { type: Number } },
        wednesday: { openTime: { type: Number }, closeTime: { type: Number } },
        thursday: { openTime: { type: Number }, closeTime: { type: Number } },
        friday: { openTime: { type: Number }, closeTime: { type: Number } },
        saturday: { openTime: { type: Number }, closeTime: { type: Number } },
        sunday: { openTime: { type: Number }, closeTime: { type: Number } }
    },
    menu: [{
        item: { type: String, required: true },
        desc: { type: String, required: true },
        price: { type: Number, required: true },
        section: { type: String }
    }],
    waitlist_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'Waitlist' },
    restaurantImage: { type: String, required: true }
});

module.exports = Mongoose.model('Restaurant', RestaurantSchema);
