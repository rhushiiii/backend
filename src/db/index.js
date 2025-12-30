import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected DB host : ${connectionInstance.connection.host}`);
    }catch(e){
        console.error("Err: ",e);
    }
};

export default connectDB();
