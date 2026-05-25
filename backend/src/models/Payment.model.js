import mongoose from "mongoose";


const paymentSchema = new mongoose.Schema({
        order: {type: mongoose.Schema.Types.ObjectId,ref: 'Order', required: true},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
        amount: {type: Number, required: true},
        paymentMethod: {type: String, enum: ['card','nagad','bkash','bank_transfer'],required: true},
        transactionId: String,
        status: {type: String,enum: ['pending','completed','failed','refund'], default: 'pending'},
        paymentGateway: String,
        receipt: String,
        createdAt: {
                type: Date,
                default: Date.now
        }
})

const paymentModel = mongoose.model('Payment',paymentSchema);

export default paymentModel;