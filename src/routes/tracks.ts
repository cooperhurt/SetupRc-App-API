import express from "express";

const router = express.Router();

router
    .route("/")
    .get(async (req, res) => {
        //TODO implement this
        return res.status(200).json({});
    })
    .post(async (req, res) => {
        //TODO implement this
        return res.status(200).json({});
    });

export default router;
