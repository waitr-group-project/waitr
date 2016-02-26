var Mongoose = require('mongoose');
    // HoursSchema = ('./HoursSchema'),
    // MenuSchema = require('./MenuSchema');

var RestaurantSchema = new Mongoose.Schema({


    restaurantName: { type: String/*, required: true*/ },
    addressLineOne: { type: String/*, required: true*/ },
    addressLineTwo: { type: String },
    city: { type: String/*, required: true*/ },
    state: { type: String/*, required: true*/ },
    zipcode: { type: String },
    location: { type: String },
    shortDescription: { type: String/*, required: true*/ },
    description: { type: String/*, required: true*/ },
    foodType: { type: String/*, required: true*/ },
    hours: {
        monday: { openTime: { type: String }, closeTime: { type: String } },
        tuesday: { openTime: { type: String }, closeTime: { type: String } },
        wednesday: { openTime: { type: String }, closeTime: { type: String } },
        thursday: { openTime: { type: String }, closeTime: { type: String } },
        friday: { openTime: { type: String }, closeTime: { type: String } },
        saturday: { openTime: { type: String }, closeTime: { type: String } },
        sunday: { openTime: { type: String }, closeTime: { type: String } }
    },
    menu: [{
        item: { type: String/*, required: true*/ },
        desc: { type: String/*, required: true*/ },
        price: { type: Number/*, required: true*/ },
        section: { type: String }
    }],
    waitlist_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'Waitlist' },
    restaurantImage: { type: String/*, required: true*/ },
    restaurantIcon: { type: String/*, required: true*/ },
    restaurantWebsite: { type: String}
});

module.exports = Mongoose.model('Restaurant', RestaurantSchema);



