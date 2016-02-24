var Mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

var UserSchema = new Mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    restaurant_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    role: {
      type: String,
      enum: ['user', 'restaurant'],
      default: 'user'
    }

});

UserSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

UserSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = Mongoose.model('User', UserSchema);
