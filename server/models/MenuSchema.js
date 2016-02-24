var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MenuSchema = new Schema({
    item: {type: String, required: true},
    desc: {type: String, required: true},
    price: {type: Number, required: true},
    section: {type:String}
});


module.exports = MenuSchema; 