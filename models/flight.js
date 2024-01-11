const mongoose = require('mongoose');
const Schema = mongoose.Schema;
	
const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['AUS','DFW','DEN','LAX','SAN', 'SEA'],
    },
    arrival: {
        type: Date,
        required: true
    }
})


const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['american', 'southwest', 'united'],
  },
  airport: {
    type: String,
    enum: ['AUS','DFW','DEN','LAX','SAN', 'SEA'],
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    // we want the default date to be a year from the day they book
    default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  },   
  destinations: [destinationSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);