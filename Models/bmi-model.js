const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BMISchema = new Schema({
  
    height : {type: Number, required: true},
    weight : {type: Number, required: true},
    bmi : {type: Number, required: true},
}, {
  timestamps: true,
});

const BMIData = mongoose.model('Data', BMISchema);

module.exports = BMIData;