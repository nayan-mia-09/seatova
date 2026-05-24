import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import ConnectDB from './configs/database.config.js'

dotenv.config()

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}))

ConnectDB();

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})