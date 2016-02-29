var Mongoose = require('mongoose'),
     HoursSchema = ('./HoursSchema');
     // = require('./MenuSchema');

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
        monday: { openTime: { type: Date, default: Date("1970-01-01T07:00:00.000Z") }, closeTime: { type: Date, default: Date("1970-01-01T07:00:00.000Z") } },
        tuesday: { openTime: { type: Date, default: Date("1970-01-01T07:00:00.000Z") }, closeTime: { type: Date, default: Date("1970-01-01T07:00:00.000Z") } },
        wednesday: { openTime: { type: Date, default: Date("1970-01-01T07:00:00.000Z") }, closeTime: { type: Date, default: Date("1970-01-01T07:00:00.000Z") } },
        thursday: { openTime: { type: Date, default: Date("1970-01-01T07:00:00.000Z") }, closeTime: { type: Date, default: Date("1970-01-01T07:00:00.000Z") } },
        friday: { openTime: { type: Date, default: Date("1970-01-01T07:00:00.000Z") }, closeTime: { type: Date, default: Date("1970-01-01T07:00:00.000Z") } },
        saturday: { openTime: { type: Date, default: Date("1970-01-01T07:00:00.000Z") }, closeTime: { type: Date, default: Date("1970-01-01T07:00:00.000Z") } },
        sunday: { openTime: { type: Date, default: Date("1970-01-01T07:00:00.000Z") }, closeTime: { type: Date, default: Date("1970-01-01T07:00:00.000Z") } }
    },
    menu: [{
        item: { type: String/*, required: true*/ },
        desc: { type: String/*, required: true*/ },
        price: { type: Number/*, required: true*/ },
        section: { type: String }
    }],
    waitlist_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'Waitlist' },
    restaurantImage: { type: String/*, required: true*/ }
});

module.exports = Mongoose.model('Restaurant', RestaurantSchema);
