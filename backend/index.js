import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
import config from "dotenv";
import { userRouter } from "./routes/users";
import { lockerRouter } from './routes/locker';
import { closetRouter } from './routes/closet';
import { modelRouter } from './routes/model';


config.config();

const app = express();
app.use(cors);
app.use(express.json);

app.use("/user", userRouter);
app.use("/closet", closetRouter);
app.use("/locker", lockerRouter);
app.use("/model", modelRouter);

const uri = process.env.CONNECTIONSTRING;
const port = process.env.PORT || 3000;

mongoose.connect(uri);

app.listen(port, () => {
    console.log("server running")
})