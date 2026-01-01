import mongoose from 'mongoose';
import {DB_NAME} from "../constants.js";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
        console.log(`MongoDB Connected DB host : ${connectionInstance.connection.host}`);
    }catch(e){
        console.log('MONGODB connection FAILED : ',e);
    }
};

export default connectDB
