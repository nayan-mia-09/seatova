import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    email: {type: String,required: true,unique: true, lowercase:true,trim: true},
    password: {type: String, required: true, minlength: 6},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: String,
    avatar: String,
    createdAt:{
        type: Date,
        default: Date.now
    }
})

// Hash password before saving 

userSchema.pre('save' , async function (next) {
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next()
    
})

const userModel = mongoose.model('User', userSchema)

export default userModel;