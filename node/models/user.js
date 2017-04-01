var mongoose = require('mongoose'),Schema=mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate');

var UserSchema = new Schema({
	email: {type: String, unique: true},
	hashed_password: String,
    firstName: String,
    lastName: String,
    dateAdded: {type:Date, default: Date.now}
});
mongoose.model('user',UserSchema);
UserSchema.plugin(deepPopulate);

