import express from "express";
import mongoose from "mongoose";
import {LockerModel} from "../models/Lockers"

const router = express.Router();

router.get("/", async (req, res) => {

});

router.post("/add", async (req, res) => {

});

router.post("/favorite", async (req, res) => {

});

export {router as lockerRouter};