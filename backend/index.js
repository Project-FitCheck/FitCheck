import express from 'express';
import cors from "cors";
import { userRouter } from "./routes/users.js";
import { lockerRouter } from './routes/locker.js';
import { closetRouter } from './routes/closet.js';
import { modelRouter } from './routes/model.js';
import connectDB from './config/db.js';


const app = express();
const corsOptions = {
    origin: "https://fitcheck.onrender.com", // frontend URI (ReactJS)
}
app.use(cors(corsOptions));
app.use(express.json());
 
app.use("/user", userRouter);
app.use("/closet", closetRouter);
app.use("/locker", lockerRouter);
app.use("/model", modelRouter);

const port = process.env.PORT || 3001;
connectDB();

app.listen(port, () => {
    console.log("server running on port " + port);
});