import mongoose from "mongoose";

const ticketsSchema = new mongoose.Schema({
                   
    match: {type: mongoose.Schema.Types.ObjectId, ref: 'Match', required: true},
    seatSection: {type: String, required: true},
    seatNumber: {type: String, required: true},
    row: String,
    price: {type: String, required: true},
    status: {type: String, enum: ['available','reserved','sold','blocked'],default: 'available'},
    order: {type: mongoose.Schema.Types.ObjectId, ref: 'Order'},
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const ticketsModel = mongoose.model('Tickets', ticketsSchema)