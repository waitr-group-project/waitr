var mongoose = require('mongoose');

var HoursSchema = new mongoose.Schema({

    monday: {
        openTime: { type: Number },
        closeTime: { type: Number }
    },
    tuesday: {
        openTime: { type: Number },
        closeTime: { type: Number }
    },
    wednesday: {
        openTime: { type: Number },
        closeTime: { type: Number }
    },
    thursday: {
        openTime: { type: Number },
        closeTime: { type: Number }
    },
    friday: {
        openTime: { type: Number },
        closeTime: { type: Number }
    },
    saturday: {
        openTime: { type: Number },
        closeTime: { type: Number }
    },
    sunday: {
        openTime: { type: Number },
        closeTime: { type: Number }
    }

});

module.exports = HoursSchema;
