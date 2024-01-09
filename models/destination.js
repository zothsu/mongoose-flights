const mongoose = require('mongoose');

const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['SEA','PDX','LAX','SAN']
    },
    arrival: {
        type: Date
    }
})

// const Destination = mongoose('Destination', destinationSchema)

module.exports = destinationSchema;