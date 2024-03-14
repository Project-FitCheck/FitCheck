import express from "express";
import mongoose from "mongoose";
import {ClosetModel} from "../models/Closets"

const router = express.Router();
router.get("/", async (req, res) => {

});

router.post("/add", async (req, res) => {

});

router.post("/favorite", async (req, res) => {

});

export {router as closetRouter};