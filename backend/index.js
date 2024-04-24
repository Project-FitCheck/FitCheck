import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser'
import { userRouter } from "./routes/users.js";
import { lockerRouter } from './routes/locker.js';
import { closetRouter } from './routes/closet.js';
import { modelRouter } from './routes/model.js';
import { clothesRouter } from './routes/clothes.js';
import { outfitsRouter } from './routes/outfits.js';
import connectDB from './config/db.js';


const app = express();

app.use(cors());
/* app.use(express.json());
 */
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(bodyParser.text({ limit: '200mb' }));

app.use("/user", userRouter);
app.use("/closet", closetRouter);
app.use("/locker", lockerRouter);
app.use("/model", modelRouter);
app.use("/clothes", clothesRouter);
app.use("/outfits", outfitsRouter)

const port = process.env.PORT || 3001;
connectDB();

app.listen(port, () => {
    console.log("server running on port " + port);
});