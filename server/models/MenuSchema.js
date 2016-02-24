var mongoose = require('mongoose');

var MenuSchema = new mongoose.Schema({

    item: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    section: { type: String }

});

module.exports = MenuSchema;
