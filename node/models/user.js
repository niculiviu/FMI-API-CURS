var mongoose = require('mongoose'),
	Schema=mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate');

var UserSchema = new Schema({
	email: {type: String, unique: true},
	hashed_password: String,
    first_name: String,
    last_name: String,
	points: {type:Number , default:0},
    user_since: {type:Date, default: Date.now},
});
mongoose.model('user',UserSchema);
UserSchema.plugin(deepPopulate);