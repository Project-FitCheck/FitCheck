/* eslint-disable no-unused-vars */
import express from "express";
import { ClosetModel } from "../models/Closets";

const router = express.Router();
/*req: {
    user: closet_id
}
*/
router.get("/", async (req, res) => {
    const closetId = req.body;
    const closet = await ClosetModel.findById({ closetId });
    const clothes = await closet.get("clothes");
    res.json({ clothes });
});

router.post("/add", async (req, res) => {

});

router.post("/favorite", async (req, res) => {

});

export { router as closetRouter };