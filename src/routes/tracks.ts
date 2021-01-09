import express from "express";
import { TrackModel } from "../models/tracks";

const router = express.Router();

router
    .route("/")
    // This route will return all setups from the application that are currently active
    .get(async (req, res) => {
        //TODO setup pagination
        const tracks = await TrackModel.find({ Active: true }).lean();
        return res.status(200).json({ tracks: tracks });
    })
    .post(async (req, res) => {
        // We probably will want to sanitize this
        const track = req.body;
        try {
            const createdTrack = await TrackModel.create(track);
            return res.status(200).json({ track: createdTrack });
        } catch (err) {
            return res.status(400).json({
                message: "Error occured during posting of track",
                error: err,
            });
        }
    });

router
    .route("/:id")
    .get(async (req, res) => {
        const { id } = req.params;
        const setup = await TrackModel.find({ Active: true, _id: id }).lean();
        return res.status(200).json({ setup: setup });
    })
    .put(async (req, res) => {
        const { id } = req.params;
        const track = req.body;

        try {
            const updatedTrack = await TrackModel.findOneAndUpdate(
                { Active: true, _id: id },
                track,
                { new: true }
            ).lean();
            return res.status(200).json({ setup: updatedTrack });
        } catch (err) {
            return res.status(400).json({
                message: "Error occured during updating the track",
                error: err,
            });
        }
    });

export default router;
