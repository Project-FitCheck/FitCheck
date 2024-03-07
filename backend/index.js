const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors);
app.use(express.json);

const url = process.env.CONNECTIONSTRING
const port = process.env.PORT || 3000

mongoose.connect(url)

app.listen(port, () => {
    console.log("server running")
})