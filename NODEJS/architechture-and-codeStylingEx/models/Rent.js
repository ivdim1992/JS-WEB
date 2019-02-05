const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentSchema = new Schema({
    days: { type: Schema.Types.String, required: true },
    car: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const Rent = mongoose.model('Rent', rentSchema);
module.exports = Rent;