import mongoose from "mongoose";

const uri = "mongodb+srv://eacquah:Clutchshot27@fitcheck0.fe4dwwk.mongodb.net/FitCheck0?retryWrites=true&w=majority&appName=FitCheck0";

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