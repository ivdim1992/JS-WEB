const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: { type: Schema.Types.String, required: true },
    content: { type: Schema.Types.String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    date: { type: Schema.Types.Date, default: Date.now }
});


const Article = mongoose.model('Article',articleSchema);

module.exports = Article;