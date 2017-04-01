var mongoose = require('mongoose'),Schema=mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate');

var CategoriesSchema=new Schema({
	name:{type:String,required: true},
	dateAdded: {type:Date, default: Date.now,required: true},
	addedBy:{type:Schema.ObjectId,ref:'user',required: true}
})
mongoose.model('categories',CategoriesSchema);
CategoriesSchema.plugin(deepPopulate);


var TaskSchema=new Schema({
    name:{type:String,required: true},
    dateAdded:{type:Date, default:Date.now},
    isDone:{type:Boolean,default:false,required: true},
    category:{type:Schema.ObjectId,ref:'categories',required: true},
    addedBy:{type:Schema.ObjectId,ref:'user',required: true}
})
mongoose.model('task',TaskSchema);
TaskSchema.plugin(deepPopulate);