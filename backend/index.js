import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
import config from "dotenv";


config.config();

const app = express();
app.use(cors);
app.use(express.json);

const url = process.env.CONNECTIONSTRING
const port = process.env.PORT || 3000

mongoose.connect(url)

app.listen(port, () => {
    console.log("server running")
})