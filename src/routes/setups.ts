import express from "express";
import { SetupModel } from "../models/setups";

const router = express.Router();

// This is recommended to
router
    .route("/")
    // This route will return all setups from the application that are currently active
    .get(async (req, res) => {
        const setups = await SetupModel.find({ Active: true }).lean();
        return res.status(200).json({ setups: setups });
    })
    .post(async (req, res) => {
        // We probably will want to sanitize this
        const setup = req.body;
        try {
            const createdSetup = await SetupModel.create(setup);
            return res.status(200).json({ setup: createdSetup });
        } catch (err) {
            return res.status(400).json({
                message: "Error occured during posting of setup",
                error: err,
            });
        }
    });

router
    .route("/:id")
    .get(async (req, res) => {
        const { id } = req.params;
        const setup = await SetupModel.find({ Active: true, _id: id }).lean();
        return res.status(200).json({ setup: setup });
    })
    .put(async (req, res) => {
        const { id } = req.params;
        const setup = req.body;

        try {
            const updateSetup = await SetupModel.findOneAndUpdate(
                { Active: true, _id: id },
                setup,
                { new: true }
            ).lean();
            return res.status(200).json({ setup: updateSetup });
        } catch (err) {
            return res.status(400).json({
                message: "Error occured during updating the setup",
                error: err,
            });
        }
    });

export default router;
