import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
       user: {type: mongoose.Schema.Types.ObjectId,ref: 'User', required: true},
       tickets: {type: mongoose.Schema.Types.ObjectId, ref: 'Ticket'},
       totalPrice: {type: Number, required: true},
       quantity: Number,
       status: {type: String, enum:['pending','confirmed','cancelled'], default: 'pending'},
       paymentStatus: {type: String, enum: ['unpaid','paid','refunded'], default: 'unpaid' },
       orderNumber: {type:String, required: true},
       expiresAt: Date,
       createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
})

const orderModel = mongoose.model('Order',orderSchema);

export default orderModel;