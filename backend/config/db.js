import mongoose from "mongoose";
import config from "dotenv";
config.config();

const uri = process.env.CONNECTIONSTRING

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri, { dbName: 'FitCheck0' });
        console.log("MongoDB connected: " + conn.connection.host)
    } catch (error) {
        console.log("Error:  " + error.message)
        process.exit()
    }
}

export default connectDB