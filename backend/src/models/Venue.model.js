import mongoose from "mongoose";

const venueSchema = mongoose.Schema({
         name: {type: String,required: true},
         city: {type: String,required: true},
         country: {type: String,required: true},
         capacity: Number,
         address: String,
         latitude: Number,
         longitude: Number,
         sections: [{
            name: String,
            capacity: Number,
            price: Number
         }],
         image: String,
     createdAt: {
                type: Date,
                default: Date.now
        }
});

const venueModel = mongoose.model('Venue', venueSchema);

export default venueModel;