import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

const ConnectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`)
        console.log(`Database Name: ${conn.connection.name}`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default ConnectDB;