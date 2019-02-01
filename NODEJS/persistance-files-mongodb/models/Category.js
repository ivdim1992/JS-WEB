const mongoose = require('mongoose');
const ObjectId = mongoose.ObjectId;
const categoryScheme = new mongoose.Schema({
    name: {type:String,required:true,unique:true},
    products: [{type:ObjectId, ref:'Product'}]
});

const Category = mongoose.model('Category',categoryScheme);

module.exports = Category;